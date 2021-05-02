import React, {Component} from 'react';
import {StyleSheet, View, TextInput, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Product} from '../../components';
import http from '../../helpers/http';
import {connect} from 'react-redux';
import {shopping} from '../../redux/actions/product';

class Home extends Component {
  state = {
    data: [],
    search: '',
  };
  async componentDidMount() {
    try {
      const response = await http().get('products?searchCriteria[pageSize]=10');
      this.setState({data: response.data.items});
    } catch (e) {
      console.log(e);
    }
  }
  searching = async value => {
    this.setState({search: value});
    if (value !== '') {
      const searchData = this.state.data.filter(data =>
        data.name.includes(this.state.search),
      );
      this.setState({data: searchData});
    } else {
      try {
        const response = await http().get(
          'products?searchCriteria[pageSize]=10',
        );
        this.setState({data: response.data.items});
      } catch (e) {
        console.log(e);
      }
    }
  };
  addShop = id => {
    const data = this.state.data.filter(value => value.id === id);
    this.props.shopping(data);
  };
  render() {
    const url =
      'https://awalmula.co.id/media/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c';
    return (
      <View style={styles.container}>
        <View style={styles.rowHeader}>
          <View style={styles.input}>
            <Icon name="search" size={20} />
            <TextInput
              placeholder="Search..."
              style={styles.textInput}
              onChangeText={value => this.searching(value)}
              defaultValue={this.state.search}
            />
          </View>
          <View style={styles.row}>
            <Icon name="shopping-cart" size={20} />
            <View style={styles.shop}>
              <Text style={styles.textShop}>
                {this.props.product.result.length}
              </Text>
            </View>
          </View>
        </View>
        {this.state.data.length > 0 && (
          <FlatList
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item}) => (
              <Product
                photoProduct={`${url}${item.media_gallery_entries[0].file}`}
                nameProduct={item.name}
                price={item.price}
                onPress={() => this.addShop(item.id)}
              />
            )}
            keyExtractor={item => String(item.id)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F4F5F7',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    paddingHorizontal: 15,
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
  },
  textInput: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2E3E5C',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
  },
  shop: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1FCC79',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textShop: {
    fontSize: 8,
    color: 'white',
  },
});

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = {shopping};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
