import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";


export default function Add() {
    const [category, setCategory] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    async function handleAdd() {
        try {
        if (!category) {
            return Alert.alert("Categoria", "Selecione a categoria!")
        }

        if (!name.trim()) {
            return Alert.alert("Nome", "O campo nome está vazio! Por favor, informe o nome!")
        }

        if (!url.trim()) {
            return Alert.alert("URL", "O campo URL está vazio! Por favor, informe a URL!")
        }

        await linkStorage.save({ id: new Date().getTime().toString(), name, url, category });

        Alert.alert("Sucesso", "Novo link salvo com sucesso!", [{ text: "OK", onPress: () => router.back() }])

    } catch (error) {
        Alert.alert("Erro", "Não foi possível adicionar o link!")
        console.log(error)
    }
}


return (
    <SafeAreaView>
        <View className="p-1">
            <View className="flex-row items-center justify-between px-[14px] mb-[24px]">
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color="#E4E4E7" />
                </TouchableOpacity>

                <Text className="text-[#E4E4E7] text-2xl">Novo</Text>
            </View>
            <Text className="px-[14px] text-[#A1A1AA]">
                Selecione uma categoria
            </Text>
            <Categories onChange={setCategory} selected={category} />
        </View>
        <View className="gap-4">
            <Input 
                autoCorrect={false}
                placeholder="Nome" 
                onChangeText={setName} />
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="URL" 
                onChangeText={setUrl} />
            <Button title="Adicionar" onPress={handleAdd} />
        </View>
    </SafeAreaView>
)
}