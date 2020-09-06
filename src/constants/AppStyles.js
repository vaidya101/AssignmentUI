import {
    StyleSheet, Platform
} from 'react-native';
import AppColors from '../constants/AppColors';
import App from '../../App';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
        backgroundColor: AppColors.colorBg,
        alignItems: 'center'
    },
    headerConatiner: {
        height: '7%',
        width: '100%',
        backgroundColor: AppColors.colorOrange,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerImage: {
        height: '46%',
        width: '7%',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    freeText: {
        zIndex: 100,
        position: 'absolute',
        left: 20,
        top: -60,
        fontSize: 20,
        color: AppColors.colorWhite,
        fontWeight: 'bold'
    },
    searchContainer: {
        top: -20,
        width: '90%',
        flexDirection: 'row',
        left: 20,
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                elevation: 0.5
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            }
        }),

    },
    foodImage: {
        width: '100%',
        height: '25%'
    },
    loationView: {
        backgroundColor: AppColors.colorOrange,
        alignItems: 'center',

    },
    location: {
        width: '35%',
        height: '48%',
        margin: 30,
        marginTop: 12
    },
    textInputContainer: {
        width: '80%',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16
    },
    foodList: {
        margin: 10,
        padding: 7,
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                elevation: 0.5
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
            }
        }),
        borderRadius: 4
    },
    foodName: {
        textAlign: 'center',
        color: AppColors.colorGrey,
        marginBottom: -5
    },
    foodListContainer: {
        marginTop: 40,
        marginLeft: 10
    },
    searchImage: {
        alignSelf: 'center',
        margin: 10,
        height: 18,
        width: 18,
    },
    multifoodImage: {
        width: 100,
        height: 70
    },
    restaurantImage: {
        width: '100%',
        height: 100
    },
    restaurantName: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5
    },
    address: {
        color:AppColors.colorGrey,
        fontSize: 13,
        marginLeft: 5,
        marginTop:3
    },
    rating: {
        width: 15,
        height: 15,
        margin: 3
    },
    ratingView: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    restaurantView: {
        width: '95%',
        alignSelf: 'center',
        marginTop: -15,
        height: '70%',
    },
    restaurantText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        marginLeft: 10
    },
    foodLists: {
        marginTop: 10,
        width: '100%',
        marginLeft: 0
    }

})
export default AppStyles