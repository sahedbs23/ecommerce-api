import mongoose from 'mongoose';

const formatRating = (val) => Math.round(val * 10) / 10;

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'a product must have a name'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'A product must have a description']
    },
    images: {},
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      default: 0.0
    },
    priceAfterDiscount: {
      type: Number,
      required: true,
      default: 0
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: (value) => value < this.price,
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    stock: {
      type: Number,
      default: 0
    },
    isOutOfStock: {
      type: Boolean,
      default: false
    },
    sold: {
      type: Number,
      default: 0
    },
    ratingAverage: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: formatRating
    },
    ratingQuantity: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
