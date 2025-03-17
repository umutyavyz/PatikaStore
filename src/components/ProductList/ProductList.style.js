// ProductList.style.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const CARD_MARGIN = 12;
const COLUMN_COUNT = 2;
const AVAILABLE_WIDTH = width - (CARD_MARGIN * 2);
const CARD_WIDTH = (AVAILABLE_WIDTH / COLUMN_COUNT) - (CARD_MARGIN * 2);

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: CARD_MARGIN,
    backgroundColor: '#f8f9fa',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    height: height / 2.8,
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    padding: 12,
    margin: CARD_MARGIN,
    borderRadius: 16,
    shadowColor: '#404040',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },
  fullWidthCard: {
    width: AVAILABLE_WIDTH - (CARD_MARGIN * 2),
  },
  image: {
    height: height / 5,
    width: '100%',
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#303030',
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    color:'gray',
    marginBottom: 6,
    fontWeight: '700',
  },
  stock: {
    fontWeight: '500',
    fontSize: 14,
    color: '#E53935',
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  rating: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
  }
});