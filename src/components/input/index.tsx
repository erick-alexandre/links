import { TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps) {
    return <TextInput {...rest} className="h-[52px] bg-[#18181B] rounded-lg px-4 border border-[#27272A] p-[10px]  text-base" style={{ color: "#F4F4F5" }} placeholderTextColor="#F4F4F5" />
}