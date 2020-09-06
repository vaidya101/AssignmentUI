import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, FlatList } from 'react-native';
import Header from '../../component/Header/Header';
import AppStyles from '../../constants/AppStyles'
import AppImages from '../../constants/AppImages'

export default class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: [
                {
                    foodName: 'Chinese',
                    foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRITcJtWxuorQJK2AhPXOo6gia9UtmdigdvHA&usqp=CAU'
                },
                {
                    foodName: 'Dessert',
                    foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs3eEOQXiSjsjC9NV6F79sMrS74SAf9y6Lqg&usqp=CAU'
                },
                {
                    foodName: 'Meals',
                    foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMvLgoeT1nVW1Qnd6s5KYzBhbLwBLAct6z4A&usqp=CAU'
                },
                {
                    foodName: 'Breakfast',
                    foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYazFw5a2YkbuMwDHIOyea5vAwuZRzyqDp_w&usqp=CAU'
                },
                {
                    foodName: 'Dessert',
                    foodImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs3eEOQXiSjsjC9NV6F79sMrS74SAf9y6Lqg&usqp=CAU'
                },
            ],
            RestaurantList: [
                {
                    restaurantImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsspJovBktsSQvGID6f3KZYTMtl0HhVbNO_g&usqp=CAU',
                    restaurantName: 'Mr Puff Coffee Shop',
                    restuarantAdd: '85 Jay St,Brooklyn ,Ny11201',
                    rating: AppImages.star,
                    time: '8.00AM'
                },
                {
                    restaurantImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa8eysiXdfk1MI-7_4XSGibntCugAJL4Y-aw&usqp=CAU',
                    restaurantName: 'Mr Puff Coffee Shop',
                    restuarantAdd: '85 Jay St,Brooklyn ,Ny11201',
                    rating: AppImages.star,
                    time: '8.00AM'

                },
                {
                    restaurantImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtmcFZHn75h1rPIt2LokecdFKTBXFC2WrPCQ&usqp=CAU',
                    restaurantName: 'Mr Puff Coffee Shop',
                    restuarantAdd: '85 Jay St,Brooklyn ,Ny11201',
                    rating: AppImages.star,
                    time: '8.00AM'

                },
                {
                    restaurantImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOZg1AMlI9DZJcfayDXID2R0MQhqACGPFbaQ&usqp=CAU',
                    restaurantName: 'Mr Puff Coffee Shop',
                    restuarantAdd: '85 Jay St,Brooklyn ,Ny11201',
                    rating: AppImages.star,
                    time: '8.00AM'
                }
            ]
        };
    }

    renderFood = ({ item }) => {
        return (
            <View style={{ marginLeft: 10 }}>
                <View style={AppStyles.foodList}>
                    <Image source={{ uri: item.foodImage }}
                        style={AppStyles.multifoodImage} />
                    <Text style={AppStyles.foodName}>{item.foodName}</Text>
                </View>

            </View>
        )
    }
    renderRestaurant = ({ item }) => {
        return (
            <View>
                <View style={[AppStyles.foodList,AppStyles.foodList]}>
                    <Image source={{ uri: item.restaurantImage }}
                        style={AppStyles.restaurantImage} />
                    <Text style={AppStyles.restaurantName}>
                        {item.restaurantName}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={AppImages.locationrestro}
                            style={[AppStyles.rating, 
                            { justifyContent:'space-between',marginLeft:0 }]} />
                        <Text style={[AppStyles.address]}>{item.restuarantAdd}</Text>
                    </View>
                    <View style={[AppStyles.ratingView, { marginTop: 7 }]}>
                        <View style={AppStyles.ratingView}>
                            <Image source={item.rating} style={AppStyles.rating} />
                            <Image source={item.rating} style={AppStyles.rating} />
                            <Image source={item.rating} style={AppStyles.rating} />
                            <Image source={item.rating} style={AppStyles.rating} />
                            <Image source={item.rating} style={AppStyles.rating} />
                        </View>
                        <Text style={[AppStyles.address, 
                            { fontSize: 14, marginTop: 7}]}>
                            Open {item.time}
                        </Text>
                    </View>
                </View>

            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={AppStyles.container}>
                <Header title='Eatance' />

                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBtGdKaTD62g-DPwwWclskcn4j9ONWHRjBhQ&usqp=CAU' }}
                    style={AppStyles.foodImage} />

                <View style={{ width: '100%' }}>
                    <Text style={AppStyles.freeText}>Buy 1 Get 1 Free</Text>

                    <View style={[AppStyles.freeText, AppStyles.searchContainer]}>
                        <View style={AppStyles.loationView}>
                            <Image source={AppImages.location}
                                style={AppStyles.location} />
                        </View>

                        <View style={AppStyles.textInputContainer}>
                            <TextInput
                                style={AppStyles.textInput}
                                placeholder="Nearby Restaurants"
                                keyboardType='default'
                                autoCapitalize='none'
                                autoCorrect={false}
                                returnKeyType='done'
                            />
                            <Image source={AppImages.search}
                                style={AppStyles.searchImage} />
                        </View>
                    </View>

                    <View style={{ marginTop: 40 }} >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={this.state.foodList}
                            renderItem={(item) => this.renderFood(item)}
                            keyExtractor={(index) => index.toString()} />

                        <View style={AppStyles.restaurantView}>

                            <Text style={AppStyles.restaurantText}>Popular Restaurant</Text>
                            <View style={{ marginBottom: 100 }}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.RestaurantList}
                                    renderItem={(item) => this.renderRestaurant(item)}
                                    keyExtractor={(index) => index.toString()} />
                            </View>
                        </View>

                    </View>

                </View>


            </SafeAreaView>
        );
    }
}
