import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    variant?: "primary" | "secondary";
}


export function Option({name, icon, variant = "primary", ...rest}: Props) {
    return (
        <TouchableOpacity className="flex-row items-center gap-1" {...rest}>

            <MaterialIcons 
                name={icon} 
                size={20} 
                color={variant === "primary" ? "#2DD4BF" : "#A1A1AA"} 
            />

            <Text 
                className={`text-md font-medium ${variant === "primary" ? "text-[#2DD4BF]" : "text-gray-400"}`}>
                    {name}
            </Text>

        </TouchableOpacity>
    )
}