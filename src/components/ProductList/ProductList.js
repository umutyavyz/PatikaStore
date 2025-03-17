// ProductList.js
import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ProductList.style";

const ProductList = ({ data, onProductPress = () => {} }) => {
  const renderItem = ({ item, index }) => {
    // Check if this is the last item and if the total count is odd
    const isLastItem = index === data.length - 1;
    const isOddCount = data.length % 2 !== 0;
    const shouldExpandFullWidth = isLastItem && isOddCount;
    
    return (
      <TouchableOpacity 
        style={[
          styles.card,
          shouldExpandFullWidth && styles.fullWidthCard
        ]}
        activeOpacity={0.7}
        onPress={() => onProductPress(item)}
      >
        <Image source={{ uri: item.imgURL }} style={styles.image} />
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        
        {!item.inStock && (
          <Text style={styles.stock}>STOKTA YOK</Text>
        )}
        
        {/* Rating işaretleyici eklendi - veri varsa kullanın */}
        {item.rating && (
          <View style={styles.ratingContainer}>
            {/* Burada bir star icon ekleyeceksiniz */}
            <Text style={styles.rating}>{item.rating}/5</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={data.length % 2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;