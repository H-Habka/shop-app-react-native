import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useTheme } from "@react-navigation/native";
import ExtraBoldText from "./ExtraBoldText";
import RegularText from "./RegularText";
import BoldText from "./BoldText";
import CustomButton from "./CustomButton";

const ProductItem = ({ item, navigation , style}) => {
    const { colors, dark } = useTheme();
    return (
        <View
            style={[
                tw`border-2 rounded-xl  p-2 mt-2 `,
                ,
                { backgroundColor: colors.background2, ...style },
            ]}
        >
            <View style={[tw`w-full`]}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={[tw`w-full`, { height: 300 }]}
                />
            </View>
            <View style={[tw`p-2`]}>
                <ExtraBoldText style={[tw`text-xl`, { color: colors.text }]}>
                    {item.title}
                </ExtraBoldText>
                <BoldText style={[tw`text-lg`, { color: colors.text }]}>
                    {item.price}
                </BoldText>
                <View style={[tw`flex-row justify-between mt-2`]}>
                    <CustomButton
                        onPress={() =>
                            navigation.navigate("ProductsDetailsScreen", {
                                title: item.title,
                                id: item.id,
                            })
                        }
                    >
                        View Details
                    </CustomButton>
                    <CustomButton>Add to Cart</CustomButton>
                </View>
            </View>
        </View>
    );
};

export default ProductItem;
