import { View, Text,useWindowDimensions,FlatList } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import ProductItem from "../../components/ProductItem";
// import {} from 

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector((state) => state.productsSlice.products);
    const windowSize = useWindowDimensions()
    return (
        <View style={[tw`p-2`]}>
            <FlatList
                numColumns={windowSize.width<=360 ? 1 : 2}
                key={windowSize.width <= 360 ? 1 : 2}
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem style={{flex : windowSize.width < 360 ? 1 : 1/2}} item={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default ProductsOverviewScreen;
