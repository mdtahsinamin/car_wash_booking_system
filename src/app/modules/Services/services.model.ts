import { Schema, model } from 'mongoose';
import { ServiceModel, TServices } from './services.interface';
const servicesSchema = new Schema<TServices, ServiceModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// static method
servicesSchema.statics.isServiceExists = async function (id: string) {
  const isService = await Services.findById(id);

  return isService;
};

// query middleware

servicesSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Services = model<TServices, ServiceModel>(
  'Services',
  servicesSchema,
);
