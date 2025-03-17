import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import styles from "./ProductList.style";

const ProductList = ({ data }) => {
    // Eğer eleman sayısı tekse, listeye boş bir öğe ekle
    const formattedData = [...data];
    if (data.length % 2 !== 0) {
        formattedData.push({ id: "empty", empty: true });
    }

    const renderItem = ({ item }) => {
        // Boş öğeyse, sadece şeffaf bir görünüm ekle
        if (item.empty) {
            return <View style={[styles.card, styles.hiddenCard]} />;
        }

        return (
            <View style={styles.card}>
                <Image source={{ uri: item.imgURL }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.stock}>{item.inStock ? "" : "STOKTA YOK"}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={formattedData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
        />
    );
};

export default ProductList;
