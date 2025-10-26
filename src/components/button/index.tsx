import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
};



export function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} className="h-[52px] bg-[#2DD4BF] rounded-lg items-center justify-center" {...rest} >
            <Text className="text-[#042F2E] text-base font-semibold">{title}</Text>
        </TouchableOpacity>
    )
}