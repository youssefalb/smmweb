// authUtils.ts
import { User } from 'firebase/auth'; // Make sure to import User type from Firebase

// List of admin email addresses
const ADMIN_EMAILS: string[] = [
    'andriybobchuk@gmail.com',
    'biurowebokraft@gmail.com',
    'youssefalbali123@gmail.com',
    // Add more admin emails as needed
];

// Function to check if a user is an admin
export const isAdminUser = (user: User | null): boolean => {
    return true;
    // return user !== null && ADMIN_EMAILS.includes(user.email ?? '');
};