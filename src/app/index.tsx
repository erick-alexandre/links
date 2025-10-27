import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View, FlatList, Modal, Text, Alert, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Option } from "@/components/option";
import { router, useFocusEffect } from "expo-router";
import "./global.css";
import { useState, useCallback } from "react";
import { categories } from "@/utils/categories";
import { linkStorage, LinkStorage } from "@/storage/link-storage";

export default function Index() {
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState(categories[0].name);
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

    async function getLinks() {
        try {
            const response = await linkStorage.get()
            const filtered = response.filter((link) => link.category === category)
            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar os links!")
        }
    }

    function handleDetails(selected: LinkStorage) {
        setShowModal(true)
        setLink(selected)
    }

    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o link!")
            console.log(error)
        }
    }

    function handleRemove() {
        Alert.alert("Excluir", "Deseja realmente excluir o link?", [
            { style: "cancel", text: "Não" },
            { text: "Sim", onPress: linkRemove }
        ])
    }

    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir o link!")
            console.log(error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            getLinks()
        }, [category])
    )

    return (
        <SafeAreaView className="flex-1 p-2 bg-[#18181B]">
            <View className="flex-row items-center justify-between">
                <Image source={require("@/assets/logo.png")} className="w-[38px] h-[32px]" />

                <TouchableOpacity activeOpacity={0.5} onPress={() => router.push("/add")}>
                    <MaterialIcons name="add" size={32} color="#2DD4BF" className="mt-2" />
                </TouchableOpacity>

            </View>

            <View className="mt-4">
                <Categories onChange={setCategory} selected={category} />
            </View>

            <FlatList
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link
                        name={item.name}
                        url={item.url}
                        onDetails={() => handleDetails(item)}
                    />
                )}
                className="border-t border-gray-600 pt-4 mb-17"
                contentContainerClassName="gap-4"
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={showModal} animationType="slide">
                <View className="flex-1 justify-end bg-black/40">
                    <View className="bg-[#18181B] border-t border-[#27272A] p-6 pb-10 rounded-t-2xl">
                        <View className="w-full flex-row items-center mb-8 justify-between">
                            <Text className="text-lg font-semibold text-[#E4E4E7]">{link.category}</Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name="close" size={20} color={"#A1A1AA"} />
                            </TouchableOpacity>
                        </View>

                        <Text className="text-sm text-[#A1A1AA]">{link.name}</Text>
                        <Text className="text-[#71717A]">{link.url}</Text>
                        <View className="flex-row items-center justify-between mt-6 pt-6 border-t border-[#757577]">
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}/>
                            <Option name="Abrir" icon="language" onPress={handleOpen} />
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}
