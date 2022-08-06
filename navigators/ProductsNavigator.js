import {
    CartScreen,
    OrdersScreen,
    ProductsDetailsScreen,
    ProductsOverviewScreen,
} from "../screens";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Satck = createNativeStackNavigator();

const ProductsNavigator = () => {
    const { colors, dark } = useTheme();
    return (
        <Satck.Navigator
            initialRouteName="ProductsOverviewScreen"
            screenOptions={() => ({
                headerTintColor: colors.four,
                headerStyle: {
                    backgroundColor: dark ? colors.background2 : colors.one,
                },
                headerTitleStyle : {fontFamily : 'tajawal-ExtraBold', fontSize : 26}
            })}
        >
            <Satck.Screen
                name="ProductsOverviewScreen"
                component={ProductsOverviewScreen}
                options={{title: "Products Overview"}}
            />
            <Satck.Screen
                name="ProductsDetailsScreen"
                component={ProductsDetailsScreen}
                options={({navigation,route}) => ({
                  title : route.params.title
                })}
            />
            <Satck.Screen name="CartScreen" component={CartScreen} />
            <Satck.Screen name="OrdersScreen" component={OrdersScreen} />
        </Satck.Navigator>
    );
};

export default ProductsNavigator;
