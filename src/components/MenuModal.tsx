import { Pressable, Modal, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Ionicons as Icon } from "@expo/vector-icons";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { router } from "expo-router";

interface MenuModalProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuModal({ showMenu, setShowMenu }: MenuModalProps) {
  const colorScheme = useColorScheme();
  const isVisible = showMenu;

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      hardwareAccelerated={true}
    >
      <Pressable className="flex-1" onPress={handleClose}>
        <View className="flex-1 p-2 mt-10">
          <ThemedView className="bg-slate-100 shadow-lg blur-md dark:bg-gray-700 p-4 w-52 h-auto self-end rounded-xl">
            <Pressable
              className="flex-row items-center justify-between p-2"
              onPress={() => {
                router.push("app-config");
                handleClose();
              }}
            >
              <ThemedText className="text-left text-xl font-semibold">
                Configurações
              </ThemedText>
              <Icon>
                <Icon
                  name="settings"
                  size={18}
                  color={colorScheme === "dark" ? "#ffffff" : "#000000"}
                />
              </Icon>
            </Pressable>
          </ThemedView>
        </View>
      </Pressable>
    </Modal>
  );
}
