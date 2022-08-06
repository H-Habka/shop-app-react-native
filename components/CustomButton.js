import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import RegularText from "./RegularText";

const CustomButton = ({ children,onPress,style }) => {
    const { colors, dark } = useTheme();
    return (
        <TouchableOpacity style={[tw`p-2 `,{ backgroundColor: colors.primary,...style }]} onPress={onPress}>
            <RegularText style={[tw`text-white text-center`]}>{children}</RegularText>
        </TouchableOpacity>
    );
};

export default CustomButton;
