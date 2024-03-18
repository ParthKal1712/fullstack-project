import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    operatingCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    availableResources: [
        {
            type: String,
            enum: [
                "Storage",
                "Office",
                "Rail Connectivity",
                "Air Connectivity",
                "Sea Port Connectivity",
            ],
        },
    ],
});

// Add the mongooseAggregatePaginate plugin
locationSchema.plugin(mongooseAggregatePaginate);

export const Office = mongoose.model("Office", locationSchema);
