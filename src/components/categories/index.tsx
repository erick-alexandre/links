import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";

type Props = {
    selected: string
    onChange: (category: string) => void
}

export function Categories({selected, onChange}: Props) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Category 
                                        icon={item.icon} 
                                        name={item.name} 
                                        isSelected={item.name === selected}
                                        onPress={() => onChange(item.name)}/>}
            horizontal
            className="h-[52px] max-h-[52px}"
            contentContainerClassName="gap-4 px-4"
            showsHorizontalScrollIndicator={false}
        />
    );
}