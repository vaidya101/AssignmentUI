import React, { Component } from 'react';
import { 
    Text, View, TouchableOpacity, Dimensions, Image 
} from 'react-native';

import AppImages from '../../constants/AppImages';
import AppStyles from '../../constants/AppStyles'

const Header = ({  title }) => {

    return (
       
            <View style={AppStyles.headerConatiner}>
                
                    <Image
                        style={[AppStyles.headerImage,{marginLeft:10}]}
                        source={AppImages.menu} />
             
                <Text style={AppStyles.headerText}>{title}</Text>
                   
                     <Image
                        style={[AppStyles.headerImage,{marginRight:10}]}
                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLTLp4e_0Hl0Av94V37ACD75NFxsUf7M9jcw&usqp=CAU'}} />
           
     </View>
       
        
    );
};



export default Header;