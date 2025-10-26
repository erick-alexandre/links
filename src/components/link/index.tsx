import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    name: string,
    url: string
    onDetails: () => void
}


export function Link({name, url, onDetails}: Props) {
    return(
        <View className="flex-row w-full gap-3">
            <View className="flex-1">
                <Text className="text-[#F4F4F5] font-semibold text-base" numberOfLines={1}>{name}</Text>
                <Text className="text-[#A1A1AA] text-sm" numberOfLines={1}>{url}</Text>
            </View>
            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color="#A1A1AA"/>
            </TouchableOpacity>
        </View>
    )
}