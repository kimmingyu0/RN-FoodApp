import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryitem = (itemData) => {
  return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
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
