import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      unique: true,
      trim: true,
      uppercase: true,
      maxlength: 20,
      index: true,
    },

    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true,
    },

    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      unique: true,
      trim: true,
      maxlength: 20,
    },

    iqamaNumber: {
      type: String,
      required: [true, "Iqama Number is required"],
      unique: true,
      trim: true,
      maxlength: 20,
      index: true,
    },

    iqamaExpiryDate: {
      type: Date,
      required: [true, "Iqama Expiry Date is required"],
    },

    passportNumber: {
      type: String,
      trim: true,
      default: "",
    },

    passportExpiryDate: {
      type: Date,
    },

    drivingLicenseNumber: {
      type: String,
      trim: true,
      default: "",
    },

    drivingLicenseExpiryDate: {
      type: Date,
    },

    drivingLicenseCategory: {
      type: String,
      trim: true,
      default: "",
    },

    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true,
      maxlength: 100,
    },

    department: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },

    joiningDate: {
      type: Date,
      required: [true, "Joining Date is required"],
    },

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
    },

    nationality: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive", "Resigned", "Terminated"],
      default: "Active",
    },

    remarks: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;