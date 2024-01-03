def factorial(n):
    # Base case: if n is 0 or 1, the factorial is 1.
    if n == 0 or n == 1:
        return 1
    # Recursive case: for n > 1, calculate the factorial by calling the function with n-1.
    else:
        # The function calls itself with a smaller argument (n-1).
        # This is the recursive step, and it will continue until n reaches 0 or 1.
        smaller_factorial = factorial(n - 1)
        # Multiply the result of the smaller factorial by n to get the factorial of n.
        return n * smaller_factorial

# Example usage:
result = factorial(5)
print("Factorial of 5 is", result)
