/**
 * 20 If / Else Exercises — Java
 * Progressive exercises from basic conditions to analytical problems.
 * 
 * You can compile and run this file using:
 * javac AllExercises.java
 * java AllExercises
 */
public class AllExercises {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("       20 IF / ELSE EXERCISES — JAVA SOLUTIONS    ");
        System.out.println("==================================================");

        // LEVEL 1: BASIC
        System.out.println("\n--- LEVEL 1: BASIC ---");
        exercise1(12);
        exercise2(7);
        exercise3(65);
        exercise4(16);
        exercise5(150000);

        // LEVEL 2: IF / ELSE IF / ELSE
        System.out.println("\n--- LEVEL 2: IF / ELSE IF / ELSE ---");
        exercise6(78);
        exercise7(25, 40);
        exercise8(14);
        exercise9(650000);
        exercise10(5);

        // LEVEL 3: MULTIPLE CONDITIONS
        System.out.println("\n--- LEVEL 3: MULTIPLE CONDITIONS ---");
        exercise11("admin", "12345");
        exercise12(70, 80);
        exercise13(80000, true);
        exercise14("red");
        exercise15("admin", "12345", false);

        // LEVEL 4: ANALYTICAL
        System.out.println("\n--- LEVEL 4: ANALYTICAL ---");
        exercise16(5);
        exercise17(55, 70, 85);
        exercise18(200000, 200000, true);
        exercise19("mySecure99!");
        exercise20(88, 92, 4500000, true);
    }

    // 1. Positive or Negative
    public static void exercise1(int number) {
        System.out.print("Ex 1 (Positive/Negative): ");
        if (number > 0) {
            System.out.println("Positive");
        } else if (number < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
    }

    // 2. Even or Odd
    public static void exercise2(int number) {
        System.out.print("Ex 2 (Even/Odd): ");
        if (number % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }

    // 3. Pass or Fail
    public static void exercise3(int score) {
        System.out.print("Ex 3 (Pass/Fail): ");
        if (score >= 60) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }
    }

    // 4. Age Check
    public static void exercise4(int age) {
        System.out.print("Ex 4 (Age Check): ");
        if (age >= 17) {
            System.out.println("Eligible for an ID card");
        } else {
            System.out.println("Not eligible for an ID card");
        }
    }

    // 5. Free Shipping
    public static void exercise5(double totalPurchase) {
        System.out.print("Ex 5 (Free Shipping): ");
        if (totalPurchase >= 100000) {
            System.out.println("Free Shipping");
        } else {
            System.out.println("Shipping Fee Applies");
        }
    }

    // 6. Grade Category
    public static void exercise6(int score) {
        System.out.print("Ex 6 (Grade Category): ");
        if (score >= 80 && score <= 100) {
            System.out.println("A");
        } else if (score >= 70) {
            System.out.println("B");
        } else if (score >= 60) {
            System.out.println("C");
        } else if (score >= 50) {
            System.out.println("D");
        } else {
            System.out.println("E");
        }
    }

    // 7. Largest Number
    public static void exercise7(int a, int b) {
        System.out.print("Ex 7 (Largest Number): ");
        if (a > b) {
            System.out.println(a + " is larger");
        } else if (b > a) {
            System.out.println(b + " is larger");
        } else {
            System.out.println("Both numbers are equal");
        }
    }

    // 8. Age Category
    public static void exercise8(int age) {
        System.out.print("Ex 8 (Age Category): ");
        if (age >= 0 && age <= 5) {
            System.out.println("Toddler");
        } else if (age <= 12) {
            System.out.println("Child");
        } else if (age <= 17) {
            System.out.println("Teenager");
        } else if (age <= 59) {
            System.out.println("Adult");
        } else {
            System.out.println("Senior");
        }
    }

    // 9. Shopping Discount
    public static void exercise9(double totalPurchase) {
        System.out.print("Ex 9 (Shopping Discount): ");
        double discount;
        if (totalPurchase >= 1000000) {
            discount = 0.20;
        } else if (totalPurchase >= 500000) {
            discount = 0.10;
        } else if (totalPurchase >= 250000) {
            discount = 0.05;
        } else {
            discount = 0.0;
        }
        double finalPrice = totalPurchase - (totalPurchase * discount);
        System.out.println("Discount: " + (int)(discount * 100) + "%, Final Price: Rp " + (long)finalPrice);
    }

    // 10. Day from Number
    public static void exercise10(int day) {
        System.out.print("Ex 10 (Day from Number): ");
        if (day == 1) {
            System.out.println("Monday");
        } else if (day == 2) {
            System.out.println("Tuesday");
        } else if (day == 3) {
            System.out.println("Wednesday");
        } else if (day == 4) {
            System.out.println("Thursday");
        } else if (day == 5) {
            System.out.println("Friday");
        } else if (day == 6) {
            System.out.println("Saturday");
        } else if (day == 7) {
            System.out.println("Sunday");
        } else {
            System.out.println("Invalid day");
        }
    }

    // 11. Simple Login
    public static void exercise11(String username, String password) {
        System.out.print("Ex 11 (Simple Login): ");
        if (username.equals("admin") && password.equals("12345")) {
            System.out.println("Login successful");
        } else if (!username.equals("admin")) {
            System.out.println("Incorrect username");
        } else {
            System.out.println("Incorrect password");
        }
    }

    // 12. Student Passing Check
    public static void exercise12(int score, int attendance) {
        System.out.print("Ex 12 (Student Passing): ");
        if (score >= 60 && attendance >= 75) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }
    }

    // 13. Free Shipping + Membership
    public static void exercise13(double totalPurchase, boolean isMember) {
        System.out.print("Ex 13 (Free Shipping + Member): ");
        if (totalPurchase >= 100000 || isMember) {
            System.out.println("Free Shipping");
        } else {
            System.out.println("Shipping fee applies");
        }
    }

    // 14. Traffic Light
    public static void exercise14(String color) {
        System.out.print("Ex 14 (Traffic Light): ");
        if (color.equalsIgnoreCase("red")) {
            System.out.println("Stop");
        } else if (color.equalsIgnoreCase("yellow")) {
            System.out.println("Get Ready");
        } else if (color.equalsIgnoreCase("green")) {
            System.out.println("Go");
        } else {
            System.out.println("Invalid Color");
        }
    }

    // 15. Login and Account Status
    public static void exercise15(String username, String password, boolean isActive) {
        System.out.print("Ex 15 (Login & Account Status): ");
        if (!username.equals("admin") || !password.equals("12345")) {
            System.out.println("Invalid username or password");
        } else if (!isActive) {
            System.out.println("Account inactive");
        } else {
            System.out.println("Login successful");
        }
    }

    // 16. Parking Fee
    public static void exercise16(int hours) {
        System.out.print("Ex 16 (Parking Fee): ");
        int fee = 0;
        if (hours <= 0) {
            fee = 0;
        } else if (hours == 1) {
            fee = 5000;
        } else {
            fee = 5000 + (hours - 1) * 3000;
            if (fee > 20000) {
                fee = 20000;
            }
        }
        System.out.println("Fee for " + hours + " hours = Rp " + fee);
    }

    // 17. Student Assessment System
    public static void exercise17(int score, int attendance, int assignments) {
        System.out.print("Ex 17 (Assessment System): ");
        boolean passScore = score >= 60;
        boolean passAttendance = attendance >= 75;
        boolean passAssignments = assignments >= 80;

        if (passScore && passAttendance && passAssignments) {
            System.out.println("Pass");
        } else {
            System.out.print("Fail -> Reason(s): ");
            if (!passScore) System.out.print("[Score < 60] ");
            if (!passAttendance) System.out.print("[Attendance < 75%] ");
            if (!passAssignments) System.out.print("[Assignments < 80%] ");
            System.out.println();
        }
    }

    // 18. Cashier Program
    public static void exercise18(double totalPurchase, double payment, boolean isMember) {
        System.out.print("Ex 18 (Cashier Program): ");
        double finalAmount = totalPurchase;
        if (isMember) {
            finalAmount = totalPurchase * 0.90; // 10% discount
        }

        if (payment < finalAmount) {
            System.out.println("Insufficient payment (Missing Rp " + (long)(finalAmount - payment) + ")");
        } else {
            double change = payment - finalAmount;
            System.out.println("Final: Rp " + (long)finalAmount + ", Change: Rp " + (long)change);
        }
    }

    // 19. Password Validation
    public static void exercise19(String password) {
        System.out.print("Ex 19 (Password Validation): ");
        String strength;
        if (password.length() < 8) {
            strength = "Too short";
        } else if (password.length() <= 11) {
            strength = "Moderate";
        } else {
            strength = "Strong";
        }

        boolean hasNumber = password.matches(".*\\d.*");
        System.out.println(strength + " (Contains number: " + (hasNumber ? "Yes" : "No") + ")");
    }

    // 20. Mini Scholarship System
    public static void exercise20(int score, int attendance, double income, boolean isActive) {
        System.out.print("Ex 20 (Mini Scholarship): ");
        if (score >= 85 && attendance >= 90 && income <= 5000000 && isActive) {
            System.out.println("Full scholarship");
        } else if (score >= 75 && attendance >= 80 && income <= 8000000) {
            System.out.println("Partial scholarship");
        } else {
            System.out.println("No scholarship");
        }
    }
}
