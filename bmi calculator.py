import tkinter as tk
from tkinter import messagebox

class BMICalculatorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("BMI Calculator App")
        self.root.geometry("300x200")

        # Create input fields for weight and height
        self.weight_label = tk.Label(root, text="Weight (kg):")
        self.weight_label.pack()
        self.weight_entry = tk.Entry(root)
        self.weight_entry.pack()

        self.height_label = tk.Label(root, text="Height (m):")
        self.height_label.pack()
        self.height_entry = tk.Entry(root)
        self.height_entry.pack()

        # Create button to calculate BMI
        self.calculate_button = tk.Button(root, text="Calculate BMI", command=self.calculate_bmi)
        self.calculate_button.pack()

        # Create label to display BMI result
        self.result_label = tk.Label(root, text="")
        self.result_label.pack()

    def calculate_bmi(self):
        try:
            weight = float(self.weight_entry.get())
            height = float(self.height_entry.get())

            bmi = weight / (height ** 2)

            if bmi < 18.5:
                classification = "Underweight"
            elif 18.5 <= bmi < 25:
                classification = "Normal weight"
            elif 25 <= bmi < 30:
                classification = "Overweight"
            else:
                classification = "Obese"

            result_text = f"BMI: {bmi:.2f}\nClassification: {classification}"
            self.result_label.config(text=result_text)

        except ValueError:
            messagebox.showerror("Error", "Invalid input. Please enter valid weight and height values.")

if __name__ == "__main__":
    root = tk.Tk()
    app = BMICalculatorApp(root)
    root.mainloop()