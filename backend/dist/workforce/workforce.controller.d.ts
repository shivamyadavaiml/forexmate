import { WorkforceService } from './workforce.service';
import { WorkforceLoginDto, WorkforceChangePasswordDto, SendCustomerOtpDto, VerifyCustomerOtpDto, CompleteDeliveryDto, CompleteCashSellDto, ReassignBranchDto, AssignDeliveryPartnerDto, ManagerCompletePickupDto, ReceiveBranchInventoryDto } from './dto/workforce.dto';
export declare class WorkforceController {
    private readonly workforceService;
    constructor(workforceService: WorkforceService);
    login(dto: WorkforceLoginDto): Promise<{
        access_token: string;
        employee: {
            id: string;
            employeeCode: string;
            name: string;
            role: import(".prisma/client").$Enums.EmployeeRole;
            branchId: string;
            branchName: string;
            phone: string;
            email: string | null;
            mustChangePassword: boolean;
        };
    }>;
    changePassword(dto: WorkforceChangePasswordDto, req: any): Promise<{
        message: string;
    }>;
    getMe(req: any): Promise<{
        branch: {
            id: string;
            phone: string | null;
            email: string | null;
            cityId: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            branchCode: string;
            branchName: string;
            branchAddress: string;
            branchCity: string;
            managerId: string | null;
            branchType: string;
            lat: number | null;
            lng: number | null;
            vaultCapacity: import("@prisma/client/runtime/library").Decimal;
            workingHours: string | null;
            cashLimitInr: import("@prisma/client/runtime/library").Decimal;
        };
        id: string;
        employeeCode: string;
        name: string;
        phone: string;
        email: string | null;
        photoUrl: string | null;
        role: import(".prisma/client").$Enums.EmployeeRole;
        branchId: string;
        cityId: string | null;
        reportingManagerId: string | null;
        status: import(".prisma/client").$Enums.EmployeeStatus;
        mustChangePassword: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
    getOrders(req: any): Promise<{
        pickup: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        cashSell: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        deliveries?: undefined;
        reassigned?: undefined;
        branchInventory?: undefined;
        cityInventory?: undefined;
    } | {
        pickup: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        deliveries: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        reassigned: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        branchInventory: never[] | {
            id: string;
            branchId: string;
            createdAt: Date;
            updatedAt: Date;
            currencyCode: string;
            availableAmount: import("@prisma/client/runtime/library").Decimal;
            reservedAmount: import("@prisma/client/runtime/library").Decimal;
        }[];
        cityInventory: never[] | ({
            branch: {
                id: string;
                phone: string | null;
                email: string | null;
                cityId: string | null;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                companyId: string;
                branchCode: string;
                branchName: string;
                branchAddress: string;
                branchCity: string;
                managerId: string | null;
                branchType: string;
                lat: number | null;
                lng: number | null;
                vaultCapacity: import("@prisma/client/runtime/library").Decimal;
                workingHours: string | null;
                cashLimitInr: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            branchId: string;
            createdAt: Date;
            updatedAt: Date;
            currencyCode: string;
            availableAmount: import("@prisma/client/runtime/library").Decimal;
            reservedAmount: import("@prisma/client/runtime/library").Decimal;
        })[];
        cashSell?: undefined;
    } | {
        deliveries: ({
            branch: {
                branchCode: string;
                branchName: string;
            };
            profile: {
                user: {
                    email: string;
                    fullName: string | null;
                    mobile: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                passportNo: string | null;
                passportExpiry: Date | null;
                panNumber: string | null;
                dob: Date | null;
                gender: string | null;
                nationality: string | null;
                occupation: string | null;
                annualIncome: import("@prisma/client/runtime/library").Decimal | null;
                travelPurpose: string | null;
                riskCategory: string;
                kycOverallStatus: string;
                lastKycReviewedAt: Date | null;
            };
            deliveries: ({
                address: {
                    id: string;
                    status: string;
                    city: string;
                    profileId: string;
                    address: string;
                    pin: string;
                    state: string;
                    landmark: string | null;
                    addressType: string;
                } | null;
            } & {
                id: string;
                status: string;
                orderId: string;
                courierPartner: string | null;
                trackingNumber: string | null;
                dispatchDate: Date | null;
                deliveredDate: Date | null;
                addressId: string | null;
            })[];
            items: ({
                currency: {
                    symbol: string;
                    id: string;
                    name: string;
                    code: string;
                    decimals: number;
                    isActive: boolean;
                };
                product: {
                    id: string;
                    name: string;
                    code: string;
                    isActive: boolean;
                };
            } & {
                id: string;
                orderId: string;
                productId: string;
                currencyId: string;
                amount: import("@prisma/client/runtime/library").Decimal;
                rate: import("@prisma/client/runtime/library").Decimal;
                inrSubtotal: import("@prisma/client/runtime/library").Decimal;
            })[];
            deliveryJob: {
                id: string;
                orderId: string;
                deliveryAddress: string;
                contactPerson: string;
                dispatchAt: Date | null;
                deliveryAgent: string | null;
                deliveryOtpCode: string | null;
                deliveredAt: Date | null;
                failedAttemptReason: string | null;
                signatureData: string | null;
                photoData: string | null;
                reachedCustomerAt: Date | null;
            } | null;
            cashAllocation: ({
                items: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    amount: import("@prisma/client/runtime/library").Decimal;
                    cashAllocationId: string;
                    denomination: number;
                    quantity: number;
                }[];
            } & {
                id: string;
                branchId: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                orderId: string;
                currencyCode: string;
                allocatedAmount: import("@prisma/client/runtime/library").Decimal;
                allocatedBy: string;
                allocatedAt: Date;
            }) | null;
        } & {
            id: string;
            branchId: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            profileId: string;
            totalAmountInr: import("@prisma/client/runtime/library").Decimal;
            deliveryMethod: string;
            quoteId: string | null;
            sessionId: string | null;
            assignedStaffId: string | null;
            assignedAt: Date | null;
            productType: string;
            workflowType: string;
            currentStage: string;
            requiresKyc: boolean;
            requiresInventory: boolean;
            requiresPickupHandover: boolean;
            requiresDelivery: boolean;
            complianceStatus: string;
            complianceCaseId: string | null;
            travelDestination: string | null;
            departureDate: Date | null;
            returnDate: Date | null;
            cancelRequested: boolean;
            cancelReason: string | null;
            cashierId: string | null;
            deliveryPartnerId: string | null;
            fulfillmentStatus: string | null;
            assignedCentralStaffId: string | null;
            assignedManagerId: string | null;
            currentBranchId: string | null;
            originalBranchId: string | null;
            reassignedBranchId: string | null;
            reassignmentReason: string | null;
            reassignedAt: Date | null;
            reassignedBy: string | null;
            complianceLocked: boolean;
            complianceCompletedAt: Date | null;
        })[];
        pickup?: undefined;
        cashSell?: undefined;
        reassigned?: undefined;
        branchInventory?: undefined;
        cityInventory?: undefined;
    } | {
        pickup?: undefined;
        cashSell?: undefined;
        deliveries?: undefined;
        reassigned?: undefined;
        branchInventory?: undefined;
        cityInventory?: undefined;
    }>;
    getHistory(req: any): Promise<({
        branch: {
            branchCode: string;
            branchName: string;
        };
        profile: {
            user: {
                email: string;
                fullName: string | null;
                mobile: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            passportNo: string | null;
            passportExpiry: Date | null;
            panNumber: string | null;
            dob: Date | null;
            gender: string | null;
            nationality: string | null;
            occupation: string | null;
            annualIncome: import("@prisma/client/runtime/library").Decimal | null;
            travelPurpose: string | null;
            riskCategory: string;
            kycOverallStatus: string;
            lastKycReviewedAt: Date | null;
        };
        deliveries: ({
            address: {
                id: string;
                status: string;
                city: string;
                profileId: string;
                address: string;
                pin: string;
                state: string;
                landmark: string | null;
                addressType: string;
            } | null;
        } & {
            id: string;
            status: string;
            orderId: string;
            courierPartner: string | null;
            trackingNumber: string | null;
            dispatchDate: Date | null;
            deliveredDate: Date | null;
            addressId: string | null;
        })[];
        items: ({
            currency: {
                symbol: string;
                id: string;
                name: string;
                code: string;
                decimals: number;
                isActive: boolean;
            };
            product: {
                id: string;
                name: string;
                code: string;
                isActive: boolean;
            };
        } & {
            id: string;
            orderId: string;
            productId: string;
            currencyId: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            rate: import("@prisma/client/runtime/library").Decimal;
            inrSubtotal: import("@prisma/client/runtime/library").Decimal;
        })[];
        deliveryJob: {
            id: string;
            orderId: string;
            deliveryAddress: string;
            contactPerson: string;
            dispatchAt: Date | null;
            deliveryAgent: string | null;
            deliveryOtpCode: string | null;
            deliveredAt: Date | null;
            failedAttemptReason: string | null;
            signatureData: string | null;
            photoData: string | null;
            reachedCustomerAt: Date | null;
        } | null;
        cashAllocation: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client/runtime/library").Decimal;
                cashAllocationId: string;
                denomination: number;
                quantity: number;
            }[];
        } & {
            id: string;
            branchId: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            currencyCode: string;
            allocatedAmount: import("@prisma/client/runtime/library").Decimal;
            allocatedBy: string;
            allocatedAt: Date;
        }) | null;
    } & {
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    })[]>;
    getCityInventory(req: any): Promise<{
        city: string;
        branches: ({
            branchInventory: {
                id: string;
                branchId: string;
                createdAt: Date;
                updatedAt: Date;
                currencyCode: string;
                availableAmount: import("@prisma/client/runtime/library").Decimal;
                reservedAmount: import("@prisma/client/runtime/library").Decimal;
            }[];
        } & {
            id: string;
            phone: string | null;
            email: string | null;
            cityId: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            branchCode: string;
            branchName: string;
            branchAddress: string;
            branchCity: string;
            managerId: string | null;
            branchType: string;
            lat: number | null;
            lng: number | null;
            vaultCapacity: import("@prisma/client/runtime/library").Decimal;
            workingHours: string | null;
            cashLimitInr: import("@prisma/client/runtime/library").Decimal;
        })[];
    }>;
    getOrder(id: string, req: any): Promise<{
        branch: {
            branchCode: string;
            branchName: string;
        };
        profile: {
            user: {
                email: string;
                fullName: string | null;
                mobile: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            passportNo: string | null;
            passportExpiry: Date | null;
            panNumber: string | null;
            dob: Date | null;
            gender: string | null;
            nationality: string | null;
            occupation: string | null;
            annualIncome: import("@prisma/client/runtime/library").Decimal | null;
            travelPurpose: string | null;
            riskCategory: string;
            kycOverallStatus: string;
            lastKycReviewedAt: Date | null;
        };
        deliveries: ({
            address: {
                id: string;
                status: string;
                city: string;
                profileId: string;
                address: string;
                pin: string;
                state: string;
                landmark: string | null;
                addressType: string;
            } | null;
        } & {
            id: string;
            status: string;
            orderId: string;
            courierPartner: string | null;
            trackingNumber: string | null;
            dispatchDate: Date | null;
            deliveredDate: Date | null;
            addressId: string | null;
        })[];
        items: ({
            currency: {
                symbol: string;
                id: string;
                name: string;
                code: string;
                decimals: number;
                isActive: boolean;
            };
            product: {
                id: string;
                name: string;
                code: string;
                isActive: boolean;
            };
        } & {
            id: string;
            orderId: string;
            productId: string;
            currencyId: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            rate: import("@prisma/client/runtime/library").Decimal;
            inrSubtotal: import("@prisma/client/runtime/library").Decimal;
        })[];
        pickupHandover: {
            id: string;
            orderId: string;
            pickupBranchId: string;
            pickupOtpCode: string;
            handoverVerifiedByCashierId: string | null;
            handoverCompletedAt: Date | null;
        } | null;
        deliveryJob: {
            id: string;
            orderId: string;
            deliveryAddress: string;
            contactPerson: string;
            dispatchAt: Date | null;
            deliveryAgent: string | null;
            deliveryOtpCode: string | null;
            deliveredAt: Date | null;
            failedAttemptReason: string | null;
            signatureData: string | null;
            photoData: string | null;
            reachedCustomerAt: Date | null;
        } | null;
        cashAllocation: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client/runtime/library").Decimal;
                cashAllocationId: string;
                denomination: number;
                quantity: number;
            }[];
        } & {
            id: string;
            branchId: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            orderId: string;
            currencyCode: string;
            allocatedAmount: import("@prisma/client/runtime/library").Decimal;
            allocatedBy: string;
            allocatedAt: Date;
        }) | null;
    } & {
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    sendOtp(id: string, dto: SendCustomerOtpDto, req: any): Promise<{
        message: string;
        devCode: string | undefined;
    }>;
    verifyOtp(id: string, dto: VerifyCustomerOtpDto, req: any): Promise<{
        verified: boolean;
    }>;
    reassignBranch(id: string, dto: ReassignBranchDto, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    managerCompletePickup(id: string, dto: ManagerCompletePickupDto, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    assignDeliveryPartner(id: string, dto: AssignDeliveryPartnerDto, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    receiveBranchInventory(dto: ReceiveBranchInventoryDto, req: any): Promise<{
        success: boolean;
        inventory: {
            id: string;
            branchId: string;
            createdAt: Date;
            updatedAt: Date;
            currencyCode: string;
            availableAmount: import("@prisma/client/runtime/library").Decimal;
            reservedAmount: import("@prisma/client/runtime/library").Decimal;
        };
        message: string;
    }>;
    completePickup(id: string, req: any): Promise<{
        message: string;
    }>;
    completeCashSell(id: string, dto: CompleteCashSellDto, req: any): Promise<{
        message: string;
    }>;
    reachedCustomer(id: string, req: any): Promise<{
        message: string;
    }>;
    completeDelivery(id: string, dto: CompleteDeliveryDto, req: any): Promise<{
        message: string;
    }>;
    allocateCash(id: string, body: {
        items: {
            denomination: number;
            quantity: number;
        }[];
    }, req: any): Promise<{
        id: string;
        branchId: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        orderId: string;
        currencyCode: string;
        allocatedAmount: import("@prisma/client/runtime/library").Decimal;
        allocatedBy: string;
        allocatedAt: Date;
    }>;
    getManagerDashboard(req: any): Promise<{
        branch: {
            id: string;
            phone: string | null;
            email: string | null;
            cityId: string | null;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            companyId: string;
            branchCode: string;
            branchName: string;
            branchAddress: string;
            branchCity: string;
            managerId: string | null;
            branchType: string;
            lat: number | null;
            lng: number | null;
            vaultCapacity: import("@prisma/client/runtime/library").Decimal;
            workingHours: string | null;
            cashLimitInr: import("@prisma/client/runtime/library").Decimal;
        };
        branchInventory: {
            id: string;
            branchId: string;
            createdAt: Date;
            updatedAt: Date;
            currencyCode: string;
            availableAmount: import("@prisma/client/runtime/library").Decimal;
            reservedAmount: import("@prisma/client/runtime/library").Decimal;
        }[];
        metrics: {
            todayOrdersCount: number;
            pendingPickupsCount: number;
            pendingDeliveriesCount: number;
            completedTodayCount: number;
            pendingCashAllocationCount: number;
            reservedCurrencyUnits: number;
            vaultBalanceUnits: number;
            availableVaultUnits: number;
            todayRevenueInr: number;
            lowInventoryAlertsCount: number;
        };
        lowStockAlerts: {
            id: string;
            branchId: string;
            createdAt: Date;
            updatedAt: Date;
            currencyCode: string;
            availableAmount: import("@prisma/client/runtime/library").Decimal;
            reservedAmount: import("@prisma/client/runtime/library").Decimal;
        }[];
        recentActivity: {
            id: string;
            branchId: string | null;
            createdAt: Date;
            userId: string | null;
            action: string;
            entityName: string | null;
            entityId: string | null;
            oldData: import("@prisma/client/runtime/library").JsonValue | null;
            newData: import("@prisma/client/runtime/library").JsonValue | null;
            changedFields: import("@prisma/client/runtime/library").JsonValue | null;
            ipAddress: string | null;
            userAgent: string | null;
            actorRoleCode: string | null;
        }[];
    }>;
    getDeliveryPartners(req: any): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        phone: string;
        status: string;
        branchName: string;
        activeDeliveriesCount: number;
        activeOrders: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string;
            fulfillmentStatus: string | null;
        }[];
    }[]>;
    getManagerReports(req: any): Promise<{
        todayOrders: number;
        weeklyOrders: number;
        completedOrders: number;
        cancelledOrders: number;
        totalOrders: number;
        currencySold: Record<string, number>;
        deliveryEfficiency: string;
        branchSlaScore: string;
    }>;
    getManagerTimeline(req: any): Promise<{
        id: string;
        branchId: string | null;
        createdAt: Date;
        userId: string | null;
        action: string;
        entityName: string | null;
        entityId: string | null;
        oldData: import("@prisma/client/runtime/library").JsonValue | null;
        newData: import("@prisma/client/runtime/library").JsonValue | null;
        changedFields: import("@prisma/client/runtime/library").JsonValue | null;
        ipAddress: string | null;
        userAgent: string | null;
        actorRoleCode: string | null;
    }[]>;
    holdOrder(id: string, body: {
        reason?: string;
    }, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    escalateOrder(id: string, body: {
        reason?: string;
    }, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    reportFraud(id: string, body: {
        reason?: string;
    }, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
    cancelPickup(id: string, body: {
        reason?: string;
    }, req: any): Promise<{
        id: string;
        branchId: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        profileId: string;
        totalAmountInr: import("@prisma/client/runtime/library").Decimal;
        deliveryMethod: string;
        quoteId: string | null;
        sessionId: string | null;
        assignedStaffId: string | null;
        assignedAt: Date | null;
        productType: string;
        workflowType: string;
        currentStage: string;
        requiresKyc: boolean;
        requiresInventory: boolean;
        requiresPickupHandover: boolean;
        requiresDelivery: boolean;
        complianceStatus: string;
        complianceCaseId: string | null;
        travelDestination: string | null;
        departureDate: Date | null;
        returnDate: Date | null;
        cancelRequested: boolean;
        cancelReason: string | null;
        cashierId: string | null;
        deliveryPartnerId: string | null;
        fulfillmentStatus: string | null;
        assignedCentralStaffId: string | null;
        assignedManagerId: string | null;
        currentBranchId: string | null;
        originalBranchId: string | null;
        reassignedBranchId: string | null;
        reassignmentReason: string | null;
        reassignedAt: Date | null;
        reassignedBy: string | null;
        complianceLocked: boolean;
        complianceCompletedAt: Date | null;
    }>;
}
