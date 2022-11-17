import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryitem = (itemData) => {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryitem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
