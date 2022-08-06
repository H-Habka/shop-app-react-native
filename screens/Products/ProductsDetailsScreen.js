import { View, Text, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import BoldText from "../../components/BoldText";
import CustomButton from "../../components/CustomButton";
import RegularText from "../../components/RegularText";
import { useTheme } from "@react-navigation/native";

const ProductsDetailsScreen = ({ route }) => {
    const { id } = route.params;
    const dispatch = useDispatch();
    const {colors,dark} = useTheme()
    const productItem = useSelector(
        (state) =>
            state.productsSlice.products.filter((item) => item.id === id)[0]
    );
    return (
        <ScrollView>
                <Image
                    source={{ uri: productItem.imageUrl }}
                    style={[tw`w-full h-96`]}
                />
                <View style={[tw`flex-row justify-around mt-6 items-center`]}>
                    <BoldText style={[tw`text-xl`, {color : colors.text}]}>
                        ${productItem.price}
                    </BoldText>
                    <CustomButton>Add To Cart</CustomButton>
                </View>
                <View style={[tw`mt-2  w-10/12 mx-auto`]}>
                    <RegularText style={[tw`text-lg text-center`,{color : colors.text}]}>{productItem.description}</RegularText>
                </View>
        </ScrollView>
    );
};

export default ProductsDetailsScreen;
