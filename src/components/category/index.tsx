import { Text, Pressable, PressableProps } from "react-native";
import  { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
    name: string;
    isSelected: boolean;
    icon: keyof typeof MaterialIcons.glyphMap;

}

export function Category({icon, name, isSelected, ...rest}: Props) {
    const color = isSelected ? "#2DD4BF" : "#A1A1AA";
    return(
        <Pressable className="flex-row items-center gap-1" {...rest}>
            <MaterialIcons name={icon} size={16} color={color} />
            <Text className={`text-md font-medium ${isSelected ? "text-[#2DD4BF]" : "text-gray-400"}`}>{name}</Text>
        </Pressable>
    )
}