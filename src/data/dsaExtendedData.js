// Auto-generated data from DSA-OneShot repo (URL based)
export const codingProblems = [
    {
        "title": "Number-Based Problems",
        "questions": [
            {
                "title": "Reverse a number",
                "explanation": "To reverse a number, we repeatedly extract the last digit using the modulo operator (%) and append it to a new number, shifting the existing digits of the reversed number by one place (multiplying by 10) in each step.\n\n```text\nOriginal: 123\nStep 1: 123 % 10 = 3, Rev = 0 * 10 + 3 = 3, Num = 123 // 10 = 12\nStep 2: 12 % 10 = 2,  Rev = 3 * 10 + 2 = 32, Num = 12 // 10 = 1\nStep 3: 1 % 10 = 1,   Rev = 32 * 10 + 1 = 321, Num = 1 // 10 = 0\nResult: 321\n```",
                "solution": "```python\ndef reverse_number(n):\n    rev = 0\n    while n > 0:\n        rev = (rev * 10) + (n % 10)\n        n //= 10\n    return rev\n```"
            },
            {
                "title": "Count number of digits",
                "explanation": "Digits can be counted by repeatedly dividing the number by 10 until it reaches zero. Each division represents one digit. Alternatively, converting the number to a string and taking the string length is a quick way in Python.",
                "solution": "```python\n# Mathematical Approach\ndef count_digits(n):\n    count = 0\n    while n > 0:\n        n //= 10\n        count += 1\n    return count\n\n# String Slicing Approach\ndef count_digits_str(n):\n    return len(str(n))\n```"
            },
            {
                "title": "Check if integer is palindrome",
                "explanation": "A number is a palindrome if it reads the same from left to right as from right to left (e.g., 121). We can verify this by reversing the number and checking if the reverse equals the original.",
                "solution": "```python\ndef is_palindrome(n):\n    # Method 1: Slicing\n    return str(n) == str(n)[::-1]\n\n    # Method 2: Mathematical (Reversing)\n    # val = reverse_number(n)\n    # return val == n\n```"
            },
            {
                "title": "Check if number is prime",
                "explanation": "A prime number is only divisible by 1 and itself. We check for divisibility from 2 up to the square root of the number (or n // 2).\n\n```text\nChecking 7:\n7 / 2? No\n7 / 3? No\nEnd check (sqrt(7) is ~2.6). Result: PRIME\n```",
                "solution": "```python\ndef is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n```"
            },
            {
                "title": "Check Armstrong number",
                "explanation": "A number is an Armstrong number (Narcissistic) if the sum of its own digits each raised to the power of the number of digits equals the number itself (e.g., 153 = 1³ + 5³ + 3³).",
                "solution": "```python\ndef is_armstrong(n):\n    s = str(n)\n    power = len(s)\n    total = sum(int(digit)**power for digit in s)\n    return total == n\n```"
            },
            {
                "title": "Prime numbers in range",
                "explanation": "Iterate from the start to the end of the range. For each number, apply the primality test logic.",
                "solution": "```python\ndef find_primes_in_range(start, end):\n    primes = []\n    for num in range(start, end + 1):\n        if num > 1:\n            for i in range(2, int(num**0.5) + 1):\n                if (num % i) == 0:\n                    break\n            else:\n                primes.append(num)\n    return primes\n```"
            },
            {
                "title": "Factorial of a number",
                "explanation": "Factorial of n (n!) is the product of all integers from 1 up to n. It can be solved iteratively with a loop or recursively.",
                "solution": "```python\n# Recursive Approach\ndef factorial(n):\n    if n == 0 or n == 1: return 1\n    return n * factorial(n - 1)\n```"
            },
            {
                "title": "Second largest number",
                "explanation": "The most efficient way is to keep track of the largest and second-largest numbers in a single pass.",
                "solution": "```python\ndef second_largest(nums):\n    first = second = float('-inf')\n    for n in nums:\n        if n > first:\n            second = first\n            first = n\n        elif n > second and n != first:\n            second = n\n    return second\n```"
            },
            {
                "title": "Find missing number",
                "explanation": "Using the formula for the sum of the first n natural numbers: Sum = n * (n + 1) // 2. The missing number is the difference between this expected sum and the actual sum.",
                "solution": "```python\ndef find_missing(nums, n):\n    expected_sum = n * (n + 1) // 2\n    return expected_sum - sum(nums)\n```"
            },
            "Find sum of digits",
            "Implement a basic calculator (`+`, `-`, `*`, `/`)",
            "Check if a number is a factorial Armstrong number",
            "Add 2 numbers using decorator",
            "Find min & max without predefined functions",
            "Find max & min value from a list without predefined methods",
            "Read multiple values from single input (`Nums = list(map(int, input().split()))`)",
            "Find largest number in a list using for loop"
        ]
    },
    {
        "title": "String Manipulation",
        "questions": [
            {
                "title": "Reverse a string",
                "explanation": "Strings in Python are immutable, but we can easily reverse them using slicing (`[::-1]`) or by joining a reversed iterator.",
                "solution": "```python\ndef reverse_string(s):\n    # Method 1: Slicing (Fastest/Pythonic)\n    return s[::-1]\n\n    # Method 2: Reverse iterator\n    # return \"\".join(reversed(s))\n```"
            },
            {
                "title": "Reverse each word",
                "explanation": "To reverse each word while keeping the word order, we split the string into words, reverse each individual word, and join them back with spaces.\n\nExample: `\"Hello World\"` → `\"olleH dlroW\"` ",
                "solution": "```python\ndef reverse_each_word(s):\n    words = s.split()\n    reversed_words = [word[::-1] for word in words]\n    return \" \".join(reversed_words)\n```"
            },
            {
                "title": "Check string palindrome",
                "explanation": "Similar to numbers, a string is a palindrome if it's equal to its reverse. For real-world cases, we usually ignore case and spaces.",
                "solution": "```python\ndef is_string_palindrome(s):\n    clean_s = \"\".join(char.lower() for char in s if char.isalnum())\n    return clean_s == clean_s[::-1]\n```"
            },
            {
                "title": "Count vowels/consonants",
                "explanation": "Iterate through the string and check if each character belongs to a set of vowels. If it's an alphabet but not a vowel, it's a consonant.",
                "solution": "```python\ndef count_v_c(s):\n    vowels = \"aeiouAEIOU\"\n    v_count = 0\n    c_count = 0\n    for char in s:\n        if char.isalpha():\n            if char in vowels:\n                v_count += 1\n            else:\n                c_count += 1\n    return v_count, c_count\n```"
            },
            {
                "title": "Check anagrams",
                "explanation": "Two strings are anagrams if they contain the same characters with the same frequencies. Sorting both strings and comparing them is the easiest way.",
                "solution": "```python\ndef are_anagrams(s1, s2):\n    return sorted(s1) == sorted(s2)\n```"
            },
            {
                "title": "Remove all vowels",
                "explanation": "Create a new string by filtering out characters that are found in the vowel set.",
                "solution": "```python\ndef remove_vowels(s):\n    vowels = \"aeiouAEIOU\"\n    return \"\".join(c for c in s if c not in vowels)\n```"
            },
            {
                "title": "Max repeated character",
                "explanation": "Use a dictionary to count frequencies, then find the key with the maximum value.",
                "solution": "```python\ndef max_repeating(s):\n    if not s: return None\n    freq = {}\n    for c in s:\n        freq[c] = freq.get(c, 0) + 1\n    return max(freq, key=freq.get)\n```"
            },
            "Reverse words in a sentence",
            "Count number of words",
            "Find duplicate characters",
            "Convert string to title case",
            "Longest substring without repeats"
        ]
    },
    {
        "title": "Loop, Logic, and Recursion",
        "questions": [
            {
                "title": "Generate Fibonacci series",
                "explanation": "The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1. We use a simple loop and swap variables to generate it.",
                "solution": "```python\ndef fibonacci(n):\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n```"
            },
            {
                "title": "Check balanced brackets",
                "explanation": "Use a stack to track opening brackets. For every closing bracket, check if it matches the top of the stack. If at the end the stack is empty, it's balanced.",
                "solution": "```python\ndef is_balanced(s):\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in pairs.values():\n            stack.append(char)\n        elif char in pairs:\n            if not stack or stack.pop() != pairs[char]:\n                return False\n    return len(stack) == 0\n```"
            },
            "Generate Fibonacci series (Recursion)",
            "Compress string using loop",
            "Flatten a nested list"
        ]
    },
    {
        "title": "Data Structures: Lists, Sets, Dictionaries",
        "questions": [
            {
                "title": "Find common elements",
                "explanation": "The most efficient way to find intersection is by converting one or both arrays to sets and using the intersection operator (&).",
                "solution": "```python\ndef find_common(arr1, arr2):\n    # Method 1: Sets (Recommended)\n    return list(set(arr1) & set(arr2))\n```"
            },
            {
                "title": "Count characters (Freq)",
                "explanation": "Iterate through the string and maintain a count in a dictionary. Keys are characters, values are their frequencies.",
                "solution": "```python\ndef char_frequency(s):\n    freq = {}\n    for char in s:\n        freq[char] = freq.get(char, 0) + 1\n    return freq\n```"
            },
            {
                "title": "Sort a list (Bubble)",
                "explanation": "Implementing a simple sorting algorithm like Bubble Sort. Adjacent elements are compared and swapped if they are in the wrong order.",
                "solution": "```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n```"
            },
            {
                "title": "Sort dict by values",
                "explanation": "Use the sorted() function with a custom key that accesses the dictionary items' values (index 1).",
                "solution": "```python\ndef sort_dict_by_value(d):\n    return dict(sorted(d.items(), key=lambda item: item[1]))\n```"
            },
            "Sort a dictionary using keys",
            "Sort with custom comparator",
            "Count repeating characters",
            "Common elements in arrays"
        ]
    },
    {
        "title": "Exceptions and Edge Cases",
        "questions": [
            "Raise a custom exception using code"
        ]
    },
    {
        "title": "Bonus Practice Challenges",
        "questions": [
            {
                "title": "Implement FizzBuzz",
                "explanation": "Print numbers from 1 to n. For multiples of 3, print 'Fizz'; for multiples of 5, print 'Buzz'; for multiples of both, print 'FizzBuzz'.",
                "solution": "```python\ndef fizz_buzz(n):\n    for i in range(1, n + 1):\n        if i % 3 == 0 and i % 5 == 0:\n            print('FizzBuzz')\n        elif i % 3 == 0:\n            print('Fizz')\n        elif i % 5 == 0:\n            print('Buzz')\n        else:\n            print(i)\n```"
            },
            "FizzBuzz using dictionary",
            "Group characters by case",
            "Advanced anagram grouping"
        ]
    }
];

export const patternQuestions = [
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "1",
        "lcLink": "https://leetcode.com/problems/two-sum/",
        "title": "Two Sum",
        "difficulty": "Easy"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "11",
        "lcLink": "https://leetcode.com/problems/container-with-most-water/",
        "title": "Container With Most Water",
        "difficulty": "Medium"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "15",
        "lcLink": "https://leetcode.com/problems/3sum/",
        "title": "3Sum",
        "difficulty": "Medium"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "16",
        "lcLink": "https://leetcode.com/problems/3sum-closest/",
        "title": "3Sum Closest",
        "difficulty": "Medium"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "18",
        "lcLink": "https://leetcode.com/problems/4sum/",
        "title": "4Sum",
        "difficulty": "Medium"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "167",
        "lcLink": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        "title": "Two Sum II - Input Array Is Sorted",
        "difficulty": "Medium"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "349",
        "lcLink": "https://leetcode.com/problems/intersection-of-two-arrays/",
        "title": "Intersection of Two Arrays",
        "difficulty": "Easy"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "392",
        "lcLink": "https://leetcode.com/problems/is-subsequence/",
        "title": "Is Subsequence",
        "difficulty": "Easy"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "881",
        "lcLink": "https://leetcode.com/problems/boats-to-save-people/",
        "title": "Boats to Save People",
        "difficulty": "Easy"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "977",
        "lcLink": "https://leetcode.com/problems/squares-of-a-sorted-array/",
        "title": "Squares of a Sorted Array",
        "difficulty": "Easy"
    },
    {
        "no": "1",
        "pattern": "Two Pointers - Converging (Sorted Array Target Sum)",
        "lcNo": "259",
        "lcLink": "https://leetcode.com/problems/3sum-smaller/",
        "title": "3Sum Smaller",
        "difficulty": "Medium"
    },
    {
        "no": "2",
        "pattern": "Two Pointers - Fast & Slow (Cycle Detection)",
        "lcNo": "141",
        "lcLink": "https://leetcode.com/problems/linked-list-cycle/",
        "title": "Linked List Cycle",
        "difficulty": "Easy"
    },
    {
        "no": "2",
        "pattern": "Two Pointers - Fast & Slow (Cycle Detection)",
        "lcNo": "202",
        "lcLink": "https://leetcode.com/problems/happy-number/",
        "title": "Happy Number",
        "difficulty": "Easy"
    },
    {
        "no": "2",
        "pattern": "Two Pointers - Fast & Slow (Cycle Detection)",
        "lcNo": "287",
        "lcLink": "https://leetcode.com/problems/find-the-duplicate-number/",
        "title": "Find the Duplicate Number",
        "difficulty": "Medium"
    },
    {
        "no": "3",
        "pattern": "Two Pointers - Fixed Separation (Nth Node from End)",
        "lcNo": "19",
        "lcLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "title": "Remove Nth Node From End of List",
        "difficulty": "Medium"
    },
    {
        "no": "3",
        "pattern": "Two Pointers - Fixed Separation (Nth Node from End)",
        "lcNo": "876",
        "lcLink": "https://leetcode.com/problems/middle-of-the-linked-list/",
        "title": "Middle of the Linked List",
        "difficulty": "Easy"
    },
    {
        "no": "3",
        "pattern": "Two Pointers - Fixed Separation (Nth Node from End)",
        "lcNo": "2095",
        "lcLink": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
        "title": "Delete the Middle Node of a Linked List",
        "difficulty": "Medium"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "26",
        "lcLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "title": "Remove Duplicates from Sorted Array",
        "difficulty": "Easy"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "27",
        "lcLink": "https://leetcode.com/problems/remove-element/",
        "title": "Remove Element",
        "difficulty": "Easy"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "75",
        "lcLink": "https://leetcode.com/problems/sort-colors/",
        "title": "Sort Colors",
        "difficulty": "Medium"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "80",
        "lcLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        "title": "Remove Duplicates from Sorted Array II",
        "difficulty": "Medium"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "283",
        "lcLink": "https://leetcode.com/problems/move-zeroes/",
        "title": "Move Zeroes",
        "difficulty": "Easy"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "443",
        "lcLink": "https://leetcode.com/problems/string-compression/",
        "title": "String Compression",
        "difficulty": "Medium"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "905",
        "lcLink": "https://leetcode.com/problems/sort-array-by-parity/",
        "title": "Sort Array By Parity",
        "difficulty": "Easy"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "2337",
        "lcLink": "https://leetcode.com/problems/move-pieces-to-obtain-a-string/",
        "title": "Move Pieces to Obtain a String",
        "difficulty": "Medium"
    },
    {
        "no": "4",
        "pattern": "Two Pointers - In-place Array Modification",
        "lcNo": "2938",
        "lcLink": "https://leetcode.com/problems/separate-black-and-white-balls/",
        "title": "Separate Black and White Balls",
        "difficulty": "Medium"
    },
    {
        "no": "5",
        "pattern": "Two Pointers - String Comparison with Backspaces",
        "lcNo": "844",
        "lcLink": "https://leetcode.com/problems/backspace-string-compare/",
        "title": "Backspace String Compare",
        "difficulty": "Easy"
    },
    {
        "no": "6",
        "pattern": "Two Pointers - Expanding From Center (Palindromes)",
        "lcNo": "5",
        "lcLink": "https://leetcode.com/problems/longest-palindromic-substring/",
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium"
    },
    {
        "no": "6",
        "pattern": "Two Pointers - Expanding From Center (Palindromes)",
        "lcNo": "647",
        "lcLink": "https://leetcode.com/problems/palindromic-substrings/",
        "title": "Palindromic Substrings",
        "difficulty": "Medium"
    },
    {
        "no": "7",
        "pattern": "Two Pointers - String Reversal",
        "lcNo": "151",
        "lcLink": "https://leetcode.com/problems/reverse-words-in-a-string/",
        "title": "Reverse Words in a String",
        "difficulty": "Medium"
    },
    {
        "no": "7",
        "pattern": "Two Pointers - String Reversal",
        "lcNo": "344",
        "lcLink": "https://leetcode.com/problems/reverse-string/",
        "title": "Reverse String",
        "difficulty": "Easy"
    },
    {
        "no": "7",
        "pattern": "Two Pointers - String Reversal",
        "lcNo": "345",
        "lcLink": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
        "title": "Reverse Vowels of a String",
        "difficulty": "Easy"
    },
    {
        "no": "7",
        "pattern": "Two Pointers - String Reversal",
        "lcNo": "541",
        "lcLink": "https://leetcode.com/problems/reverse-string-ii/",
        "title": "Reverse String II",
        "difficulty": "Easy"
    },
    {
        "no": "8",
        "pattern": "Sliding Window - Fixed Size (Subarray Calculation)",
        "lcNo": "346",
        "lcLink": "https://leetcode.com/problems/moving-average-from-data-stream/",
        "title": "Moving Average from Data Stream",
        "difficulty": "Easy"
    },
    {
        "no": "8",
        "pattern": "Sliding Window - Fixed Size (Subarray Calculation)",
        "lcNo": "643",
        "lcLink": "https://leetcode.com/problems/maximum-average-subarray-i/",
        "title": "Maximum Average Subarray I",
        "difficulty": "Easy"
    },
    {
        "no": "8",
        "pattern": "Sliding Window - Fixed Size (Subarray Calculation)",
        "lcNo": "2985",
        "lcLink": "https://leetcode.com/problems/calculate-compressed-mean/",
        "title": "Calculate Compressed Mean",
        "difficulty": "Easy"
    },
    {
        "no": "8",
        "pattern": "Sliding Window - Fixed Size (Subarray Calculation)",
        "lcNo": "3254",
        "lcLink": "https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/",
        "title": "Find the Power of K‑Size Subarrays I",
        "difficulty": "Medium"
    },
    {
        "no": "8",
        "pattern": "Sliding Window - Fixed Size (Subarray Calculation)",
        "lcNo": "3318",
        "lcLink": "https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/",
        "title": "Find X‑Sum of All K‑Long Subarrays I",
        "difficulty": "Easy"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "3",
        "lcLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "76",
        "lcLink": "https://leetcode.com/problems/minimum-window-substring/",
        "title": "Minimum Window Substring",
        "difficulty": "Hard"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "209",
        "lcLink": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "title": "Minimum Size Subarray Sum",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "219",
        "lcLink": "https://leetcode.com/problems/contains-duplicate-ii/",
        "title": "Contains Duplicate II",
        "difficulty": "Easy"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "424",
        "lcLink": "https://leetcode.com/problems/longest-repeating-character-replacement/",
        "title": "Longest Repeating Character Replacement",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "713",
        "lcLink": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "title": "Subarray Product Less Than K",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "904",
        "lcLink": "https://leetcode.com/problems/fruit-into-baskets/",
        "title": "Fruit Into Baskets",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "1004",
        "lcLink": "https://leetcode.com/problems/max-consecutive-ones-iii/",
        "title": "Max Consecutive Ones III",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "1438",
        "lcLink": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
        "title": "Longest Continuous Subarray With Absolute Diff ≤ Limit",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "1493",
        "lcLink": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
        "title": "Longest Subarray of 1’s After Deleting One Element",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "1658",
        "lcLink": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
        "title": "Minimum Operations to Reduce X to Zero",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "1838",
        "lcLink": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
        "title": "Frequency of the Most Frequent Element",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "2461",
        "lcLink": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
        "title": "Maximum Sum of Distinct Subarrays With Length K",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "2516",
        "lcLink": "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/",
        "title": "Take K of Each Character From Left and Right",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "2762",
        "lcLink": "https://leetcode.com/problems/continuous-subarrays/",
        "title": "Continuous Subarrays",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "2779",
        "lcLink": "https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/",
        "title": "Maximum Beauty of an Array After Applying Operation",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "2981",
        "lcLink": "https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/",
        "title": "Find Longest Special Substring That Occurs Thrice I",
        "difficulty": "Hard"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "3026",
        "lcLink": "https://leetcode.com/problems/maximum-good-subarray-sum/",
        "title": "Maximum Good Subarray Sum",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "3346",
        "lcLink": "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/",
        "title": "Maximum Frequency of an Element After Performing Operations I",
        "difficulty": "Medium"
    },
    {
        "no": "9",
        "pattern": "Sliding Window - Variable Size (Condition-Based)",
        "lcNo": "3347",
        "lcLink": "https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/",
        "title": "Maximum Frequency of an Element After Performing Operations II",
        "difficulty": "Medium"
    },
    {
        "no": "10",
        "pattern": "Sliding Window - Monotonic Queue for Max/Min",
        "lcNo": "239",
        "lcLink": "https://leetcode.com/problems/sliding-window-maximum/",
        "title": "Sliding Window Maximum",
        "difficulty": "Hard"
    },
    {
        "no": "10",
        "pattern": "Sliding Window - Monotonic Queue for Max/Min",
        "lcNo": "862",
        "lcLink": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
        "title": "Shortest Subarray with Sum at Least K",
        "difficulty": "Hard"
    },
    {
        "no": "10",
        "pattern": "Sliding Window - Monotonic Queue for Max/Min",
        "lcNo": "1696",
        "lcLink": "https://leetcode.com/problems/jump-game-vi/",
        "title": "Jump Game VI",
        "difficulty": "Medium"
    },
    {
        "no": "11",
        "pattern": "Sliding Window - Character Frequency Matching",
        "lcNo": "438",
        "lcLink": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "title": "Find All Anagrams in a String",
        "difficulty": "Medium"
    },
    {
        "no": "11",
        "pattern": "Sliding Window - Character Frequency Matching",
        "lcNo": "567",
        "lcLink": "https://leetcode.com/problems/permutation-in-string/",
        "title": "Permutation in String",
        "difficulty": "Medium"
    },
    {
        "no": "12",
        "pattern": "Tree BFS - Level Order Traversal",
        "lcNo": "102",
        "lcLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "title": "Binary Tree Level Order Traversal",
        "difficulty": "Medium"
    },
    {
        "no": "12",
        "pattern": "Tree BFS - Level Order Traversal",
        "lcNo": "103",
        "lcLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        "title": "Binary Tree Zigzag Level Order Traversal",
        "difficulty": "Medium"
    },
    {
        "no": "12",
        "pattern": "Tree BFS - Level Order Traversal",
        "lcNo": "199",
        "lcLink": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "title": "Binary Tree Right Side View",
        "difficulty": "Medium"
    },
    {
        "no": "12",
        "pattern": "Tree BFS - Level Order Traversal",
        "lcNo": "515",
        "lcLink": "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
        "title": "Find Largest Value in Each Tree Row",
        "difficulty": "Medium"
    },
    {
        "no": "12",
        "pattern": "Tree BFS - Level Order Traversal",
        "lcNo": "1161",
        "lcLink": "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/",
        "title": "Maximum Level Sum of a Binary Tree",
        "difficulty": "Medium"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "100",
        "lcLink": "https://leetcode.com/problems/same-tree/",
        "title": "Same Tree",
        "difficulty": "Easy"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "101",
        "lcLink": "https://leetcode.com/problems/symmetric-tree/",
        "title": "Symmetric Tree",
        "difficulty": "Easy"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "105",
        "lcLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "difficulty": "Medium"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "114",
        "lcLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        "title": "Flatten Binary Tree to Linked List",
        "difficulty": "Medium"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "226",
        "lcLink": "https://leetcode.com/problems/invert-binary-tree/",
        "title": "Invert Binary Tree",
        "difficulty": "Easy"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "257",
        "lcLink": "https://leetcode.com/problems/binary-tree-paths/",
        "title": "Binary Tree Paths",
        "difficulty": "Easy"
    },
    {
        "no": "13",
        "pattern": "Tree DFS - Recursive Preorder Traversal",
        "lcNo": "988",
        "lcLink": "https://leetcode.com/problems/smallest-string-starting-from-leaf/",
        "title": "Smallest String Starting From Leaf",
        "difficulty": "Medium"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "94",
        "lcLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "title": "Binary Tree Inorder Traversal",
        "difficulty": "Easy"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "98",
        "lcLink": "https://leetcode.com/problems/validate-binary-search-tree/",
        "title": "Validate Binary Search Tree",
        "difficulty": "Medium"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "173",
        "lcLink": "https://leetcode.com/problems/binary-search-tree-iterator/",
        "title": "Binary Search Tree Iterator",
        "difficulty": "Medium"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "230",
        "lcLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        "title": "Kth Smallest Element in a BST",
        "difficulty": "Medium"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "501",
        "lcLink": "https://leetcode.com/problems/find-mode-in-binary-search-tree/",
        "title": "Find Mode in Binary Search Tree",
        "difficulty": "Easy"
    },
    {
        "no": "14",
        "pattern": "Tree DFS - Recursive Inorder Traversal",
        "lcNo": "530",
        "lcLink": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
        "title": "Minimum Absolute Difference in BST",
        "difficulty": "Easy"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "104",
        "lcLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "title": "Maximum Depth of Binary Tree",
        "difficulty": "Easy"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "110",
        "lcLink": "https://leetcode.com/problems/balanced-binary-tree/",
        "title": "Balanced Binary Tree",
        "difficulty": "Easy"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "124",
        "lcLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "title": "Binary Tree Maximum Path Sum",
        "difficulty": "Hard"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "145",
        "lcLink": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        "title": "Binary Tree Postorder Traversal",
        "difficulty": "Easy"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "337",
        "lcLink": "https://leetcode.com/problems/house-robber-iii/",
        "title": "House Robber III",
        "difficulty": "Medium"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "366",
        "lcLink": "https://leetcode.com/problems/find-leaves-of-binary-tree/",
        "title": "Find Leaves of Binary Tree",
        "difficulty": "Medium"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "543",
        "lcLink": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "title": "Diameter of Binary Tree",
        "difficulty": "Easy"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "863",
        "lcLink": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
        "title": "All Nodes Distance K in Binary Tree",
        "difficulty": "Medium"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "1110",
        "lcLink": "https://leetcode.com/problems/delete-nodes-and-return-forest/",
        "title": "Delete Nodes And Return Forest",
        "difficulty": "Medium"
    },
    {
        "no": "15",
        "pattern": "Tree DFS - Recursive Postorder Traversal",
        "lcNo": "2458",
        "lcLink": "https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/",
        "title": "Height of Binary Tree After Subtree Removal Queries",
        "difficulty": "Hard"
    },
    {
        "no": "17",
        "pattern": "Tree - Lowest Common Ancestor (LCA) Finding",
        "lcNo": "235",
        "lcLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "title": "Lowest Common Ancestor of a Binary Search Tree",
        "difficulty": "Medium"
    },
    {
        "no": "17",
        "pattern": "Tree - Lowest Common Ancestor (LCA) Finding",
        "lcNo": "236",
        "lcLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "title": "Lowest Common Ancestor of a Binary Tree",
        "difficulty": "Medium"
    },
    {
        "no": "18",
        "pattern": "Tree - Serialization and Deserialization",
        "lcNo": "297",
        "lcLink": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "title": "Serialize and Deserialize Binary Tree",
        "difficulty": "Hard"
    },
    {
        "no": "18",
        "pattern": "Tree - Serialization and Deserialization",
        "lcNo": "572",
        "lcLink": "https://leetcode.com/problems/subtree-of-another-tree/",
        "title": "Subtree of Another Tree",
        "difficulty": "Easy"
    },
    {
        "no": "18",
        "pattern": "Tree - Serialization and Deserialization",
        "lcNo": "652",
        "lcLink": "https://leetcode.com/problems/find-duplicate-subtrees/",
        "title": "Find Duplicate Subtrees",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "130",
        "lcLink": "https://leetcode.com/problems/surrounded-regions/",
        "title": "Surrounded Regions",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "200",
        "lcLink": "https://leetcode.com/problems/number-of-islands/",
        "title": "Number of Islands",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "417",
        "lcLink": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        "title": "Pacific Atlantic Water Flow",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "547",
        "lcLink": "https://leetcode.com/problems/number-of-provinces/",
        "title": "Number of Provinces",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "695",
        "lcLink": "https://leetcode.com/problems/max-area-of-island/",
        "title": "Max Area of Island",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "733",
        "lcLink": "https://leetcode.com/problems/flood-fill/",
        "title": "Flood Fill",
        "difficulty": "Easy"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "841",
        "lcLink": "https://leetcode.com/problems/keys-and-rooms/",
        "title": "Keys and Rooms",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "1020",
        "lcLink": "https://leetcode.com/problems/number-of-enclaves/",
        "title": "Number of Enclaves",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "1254",
        "lcLink": "https://leetcode.com/problems/number-of-closed-islands/",
        "title": "Number of Closed Islands",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "1905",
        "lcLink": "https://leetcode.com/problems/count-sub-islands/",
        "title": "Count Sub Islands",
        "difficulty": "Medium"
    },
    {
        "no": "19",
        "pattern": "Graph DFS - Connected Components / Island Counting",
        "lcNo": "2101",
        "lcLink": "https://leetcode.com/problems/detonate-the-maximum-bombs/",
        "title": "Detonate the Maximum Bombs",
        "difficulty": "Medium"
    },
    {
        "no": "20",
        "pattern": "Graph BFS - Connected Components / Island Counting",
        "lcNo": "127",
        "lcLink": "https://leetcode.com/problems/word-ladder/",
        "title": "Word Ladder",
        "difficulty": "Hard"
    },
    {
        "no": "20",
        "pattern": "Graph BFS - Connected Components / Island Counting",
        "lcNo": "542",
        "lcLink": "https://leetcode.com/problems/01-matrix/",
        "title": "01 Matrix",
        "difficulty": "Medium"
    },
    {
        "no": "20",
        "pattern": "Graph BFS - Connected Components / Island Counting",
        "lcNo": "994",
        "lcLink": "https://leetcode.com/problems/rotting-oranges/",
        "title": "Rotting Oranges",
        "difficulty": "Easy"
    },
    {
        "no": "20",
        "pattern": "Graph BFS - Connected Components / Island Counting",
        "lcNo": "1091",
        "lcLink": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "title": "Shortest Path in Binary Matrix",
        "difficulty": "Medium"
    },
    {
        "no": "21",
        "pattern": "Graph DFS - Cycle Detection (Directed Graph)",
        "lcNo": "207",
        "lcLink": "https://leetcode.com/problems/course-schedule/",
        "title": "Course Schedule",
        "difficulty": "Medium"
    },
    {
        "no": "21",
        "pattern": "Graph DFS - Cycle Detection (Directed Graph)",
        "lcNo": "210",
        "lcLink": "https://leetcode.com/problems/course-schedule-ii/",
        "title": "Course Schedule II",
        "difficulty": "Medium"
    },
    {
        "no": "21",
        "pattern": "Graph DFS - Cycle Detection (Directed Graph)",
        "lcNo": "802",
        "lcLink": "https://leetcode.com/problems/find-eventual-safe-states/",
        "title": "Find Eventual Safe States",
        "difficulty": "Medium"
    },
    {
        "no": "21",
        "pattern": "Graph DFS - Cycle Detection (Directed Graph)",
        "lcNo": "1059",
        "lcLink": "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/",
        "title": "All Paths from Source Lead to Destination",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "207",
        "lcLink": "https://leetcode.com/problems/course-schedule/",
        "title": "Course Schedule",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "210",
        "lcLink": "https://leetcode.com/problems/course-schedule-ii/",
        "title": "Course Schedule II",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "269",
        "lcLink": "https://leetcode.com/problems/alien-dictionary/",
        "title": "Alien Dictionary",
        "difficulty": "Hard"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "310",
        "lcLink": "https://leetcode.com/problems/minimum-height-trees/",
        "title": "Minimum Height Trees",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "444",
        "lcLink": "https://leetcode.com/problems/sequence-reconstruction/",
        "title": "Sequence Reconstruction",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "1136",
        "lcLink": "https://leetcode.com/problems/parallel-courses/",
        "title": "Parallel Courses",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "1857",
        "lcLink": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/",
        "title": "Largest Color Value in a Directed Graph",
        "difficulty": "Hard"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "2050",
        "lcLink": "https://leetcode.com/problems/parallel-courses-iii/",
        "title": "Parallel Courses III",
        "difficulty": "Hard"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "2115",
        "lcLink": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/",
        "title": "Find All Possible Recipes from Given Supplies",
        "difficulty": "Medium"
    },
    {
        "no": "22",
        "pattern": "Graph BFS - Topological Sort (Kahn's Algorithm)",
        "lcNo": "2392",
        "lcLink": "https://leetcode.com/problems/build-a-matrix-with-conditions/",
        "title": "Build a Matrix With Conditions",
        "difficulty": "Hard"
    },
    {
        "no": "23",
        "pattern": "Graph - Deep Copy / Cloning",
        "lcNo": "133",
        "lcLink": "https://leetcode.com/problems/clone-graph/",
        "title": "Clone Graph",
        "difficulty": "Medium"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "743",
        "lcLink": "https://leetcode.com/problems/network-delay-time/",
        "title": "Network Delay Time",
        "difficulty": "Medium"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "778",
        "lcLink": "https://leetcode.com/problems/swim-in-rising-water/",
        "title": "Swim in Rising Water",
        "difficulty": "Hard"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "1514",
        "lcLink": "https://leetcode.com/problems/path-with-maximum-probability/",
        "title": "Path with Maximum Probability",
        "difficulty": "Medium"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "1631",
        "lcLink": "https://leetcode.com/problems/path-with-minimum-effort/",
        "title": "Path With Minimum Effort",
        "difficulty": "Medium"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "1976",
        "lcLink": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",
        "title": "Number of Ways to Arrive at Destination",
        "difficulty": "Medium"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "2045",
        "lcLink": "https://leetcode.com/problems/second-minimum-time-to-reach-destination/",
        "title": "Second Minimum Time to Reach Destination",
        "difficulty": "Hard"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "2203",
        "lcLink": "https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/",
        "title": "Minimum Weighted Subgraph With the Required Paths",
        "difficulty": "Hard"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "2290",
        "lcLink": "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/",
        "title": "Minimum Obstacle Removal to Reach Corner",
        "difficulty": "Hard"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "2577",
        "lcLink": "https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/",
        "title": "Minimum Time to Visit a Cell In a Grid",
        "difficulty": "Hard"
    },
    {
        "no": "24",
        "pattern": "Graph - Shortest Path (Dijkstra's Algorithm)",
        "lcNo": "2812",
        "lcLink": "https://leetcode.com/problems/find-the-safest-path-in-a-grid/",
        "title": "Find the Safest Path in a Grid",
        "difficulty": "Medium"
    },
    {
        "no": "25",
        "pattern": "Graph - Shortest Path (Bellman-Ford / BFS + K Stops)",
        "lcNo": "787",
        "lcLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "title": "Cheapest Flights Within K Stops",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "200",
        "lcLink": "https://leetcode.com/problems/number-of-islands/",
        "title": "Number of Islands",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "261",
        "lcLink": "https://leetcode.com/problems/graph-valid-tree/",
        "title": "Graph Valid Tree",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "305",
        "lcLink": "https://leetcode.com/problems/number-of-islands-ii/",
        "title": "Number of Islands II",
        "difficulty": "Hard"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "323",
        "lcLink": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        "title": "Number of Connected Components in an Undirected Graph",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "547",
        "lcLink": "https://leetcode.com/problems/number-of-provinces/",
        "title": "Number of Provinces",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "684",
        "lcLink": "https://leetcode.com/problems/redundant-connection/",
        "title": "Redundant Connection",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "721",
        "lcLink": "https://leetcode.com/problems/accounts-merge/",
        "title": "Accounts Merge",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "737",
        "lcLink": "https://leetcode.com/problems/sentence-similarity-ii/",
        "title": "Sentence Similarity II",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "947",
        "lcLink": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
        "title": "Most Stones Removed with Same Row or Column",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "952",
        "lcLink": "https://leetcode.com/problems/largest-component-size-by-common-factor/",
        "title": "Largest Component Size by Common Factor",
        "difficulty": "Hard"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "959",
        "lcLink": "https://leetcode.com/problems/regions-cut-by-slashes/",
        "title": "Regions Cut By Slashes",
        "difficulty": "Medium"
    },
    {
        "no": "26",
        "pattern": "Graph - Union-Find (Disjoint Set Union - DSU)",
        "lcNo": "1101",
        "lcLink": "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/",
        "title": "The Earliest Moment When Everyone Become Friends",
        "difficulty": "Medium"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "70",
        "lcLink": "https://leetcode.com/problems/climbing-stairs/",
        "title": "Climbing Stairs",
        "difficulty": "Easy"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "91",
        "lcLink": "https://leetcode.com/problems/decode-ways/",
        "title": "Decode Ways",
        "difficulty": "Medium"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "198",
        "lcLink": "https://leetcode.com/problems/house-robber/",
        "title": "House Robber",
        "difficulty": "Medium"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "213",
        "lcLink": "https://leetcode.com/problems/house-robber-ii/",
        "title": "House Robber II",
        "difficulty": "Medium"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "509",
        "lcLink": "https://leetcode.com/problems/fibonacci-number/",
        "title": "Fibonacci Number",
        "difficulty": "Easy"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "740",
        "lcLink": "https://leetcode.com/problems/delete-and-earn/",
        "title": "Delete and Earn",
        "difficulty": "Medium"
    },
    {
        "no": "27",
        "pattern": "DP - 1D Array (Fibonacci Style)",
        "lcNo": "746",
        "lcLink": "https://leetcode.com/problems/min-cost-climbing-stairs/",
        "title": "Min Cost Climbing Stairs",
        "difficulty": "Easy"
    },
    {
        "no": "28",
        "pattern": "DP - 1D Array (Kadane's Algorithm for Max/Min Subarray)",
        "lcNo": "53",
        "lcLink": "https://leetcode.com/problems/maximum-subarray/",
        "title": "Maximum Subarray",
        "difficulty": "Easy"
    },
    {
        "no": "29",
        "pattern": "DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        "lcNo": "322",
        "lcLink": "https://leetcode.com/problems/coin-change/",
        "title": "Coin Change",
        "difficulty": "Medium"
    },
    {
        "no": "29",
        "pattern": "DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        "lcNo": "377",
        "lcLink": "https://leetcode.com/problems/combination-sum-iv/",
        "title": "Combination Sum IV",
        "difficulty": "Medium"
    },
    {
        "no": "29",
        "pattern": "DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        "lcNo": "518",
        "lcLink": "https://leetcode.com/problems/coin-change-2/",
        "title": "Coin Change II",
        "difficulty": "Medium"
    },
    {
        "no": "30",
        "pattern": "DP - 1D Array (0/1 Knapsack Subset Sum Style)",
        "lcNo": "416",
        "lcLink": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "title": "Partition Equal Subset Sum",
        "difficulty": "Medium"
    },
    {
        "no": "30",
        "pattern": "DP - 1D Array (0/1 Knapsack Subset Sum Style)",
        "lcNo": "494",
        "lcLink": "https://leetcode.com/problems/target-sum/",
        "title": "Target Sum",
        "difficulty": "Medium"
    },
    {
        "no": "31",
        "pattern": "DP - 1D Array (Word Break Style)",
        "lcNo": "139",
        "lcLink": "https://leetcode.com/problems/word-break/",
        "title": "Word Break",
        "difficulty": "Medium"
    },
    {
        "no": "31",
        "pattern": "DP - 1D Array (Word Break Style)",
        "lcNo": "140",
        "lcLink": "https://leetcode.com/problems/word-break-ii/",
        "title": "Word Break II",
        "difficulty": "Hard"
    },
    {
        "no": "32",
        "pattern": "DP - 2D Array (Longest Common Subsequence - LCS)",
        "lcNo": "583",
        "lcLink": "https://leetcode.com/problems/delete-operation-for-two-strings/",
        "title": "Delete Operation for Two Strings",
        "difficulty": "Medium"
    },
    {
        "no": "32",
        "pattern": "DP - 2D Array (Longest Common Subsequence - LCS)",
        "lcNo": "1143",
        "lcLink": "https://leetcode.com/problems/longest-common-subsequence/",
        "title": "Longest Common Subsequence",
        "difficulty": "Medium"
    },
    {
        "no": "33",
        "pattern": "DP - 2D Array (Edit Distance / Levenshtein Distance)",
        "lcNo": "72",
        "lcLink": "https://leetcode.com/problems/edit-distance/",
        "title": "Edit Distance",
        "difficulty": "Hard"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "62",
        "lcLink": "https://leetcode.com/problems/unique-paths/",
        "title": "Unique Paths",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "63",
        "lcLink": "https://leetcode.com/problems/unique-paths-ii/",
        "title": "Unique Paths II",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "64",
        "lcLink": "https://leetcode.com/problems/minimum-path-sum/",
        "title": "Minimum Path Sum",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "120",
        "lcLink": "https://leetcode.com/problems/triangle/",
        "title": "Triangle",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "221",
        "lcLink": "https://leetcode.com/problems/maximal-square/",
        "title": "Maximal Square",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "931",
        "lcLink": "https://leetcode.com/problems/minimum-falling-path-sum/",
        "title": "Minimum Falling Path Sum",
        "difficulty": "Medium"
    },
    {
        "no": "34",
        "pattern": "DP - 2D Array (Unique Paths on Grid)",
        "lcNo": "1277",
        "lcLink": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
        "title": "Count Square Submatrices with All Ones",
        "difficulty": "Medium"
    },
    {
        "no": "35",
        "pattern": "DP - Interval DP",
        "lcNo": "312",
        "lcLink": "https://leetcode.com/problems/burst-balloons/",
        "title": "Burst Balloons",
        "difficulty": "Hard"
    },
    {
        "no": "35",
        "pattern": "DP - Interval DP",
        "lcNo": "546",
        "lcLink": "https://leetcode.com/problems/remove-boxes/",
        "title": "Remove Boxes",
        "difficulty": "Hard"
    },
    {
        "no": "36",
        "pattern": "DP - Catalan Numbers",
        "lcNo": "95",
        "lcLink": "https://leetcode.com/problems/unique-binary-search-trees-ii/",
        "title": "Unique Binary Search Trees II",
        "difficulty": "Medium"
    },
    {
        "no": "36",
        "pattern": "DP - Catalan Numbers",
        "lcNo": "96",
        "lcLink": "https://leetcode.com/problems/unique-binary-search-trees/",
        "title": "Unique Binary Search Trees",
        "difficulty": "Medium"
    },
    {
        "no": "36",
        "pattern": "DP - Catalan Numbers",
        "lcNo": "241",
        "lcLink": "https://leetcode.com/problems/different-ways-to-add-parentheses/",
        "title": "Different Ways to Add Parentheses",
        "difficulty": "Medium"
    },
    {
        "no": "37",
        "pattern": "DP - Longest Increasing Subsequence (LIS)",
        "lcNo": "300",
        "lcLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "title": "Longest Increasing Subsequence",
        "difficulty": "Medium"
    },
    {
        "no": "37",
        "pattern": "DP - Longest Increasing Subsequence (LIS)",
        "lcNo": "354",
        "lcLink": "https://leetcode.com/problems/russian-doll-envelopes/",
        "title": "Russian Doll Envelopes",
        "difficulty": "Hard"
    },
    {
        "no": "37",
        "pattern": "DP - Longest Increasing Subsequence (LIS)",
        "lcNo": "1671",
        "lcLink": "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/",
        "title": "Minimum Number of Removals to Make Mountain Array",
        "difficulty": "Medium"
    },
    {
        "no": "37",
        "pattern": "DP - Longest Increasing Subsequence (LIS)",
        "lcNo": "2407",
        "lcLink": "https://leetcode.com/problems/longest-increasing-subsequence-ii/",
        "title": "Longest Increasing Subsequence II",
        "difficulty": "Hard"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "215",
        "lcLink": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "title": "Kth Largest Element in an Array",
        "difficulty": "Medium"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "347",
        "lcLink": "https://leetcode.com/problems/top-k-frequent-elements/",
        "title": "Top K Frequent Elements",
        "difficulty": "Medium"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "451",
        "lcLink": "https://leetcode.com/problems/sort-characters-by-frequency/",
        "title": "Sort Characters By Frequency",
        "difficulty": "Medium"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "506",
        "lcLink": "https://leetcode.com/problems/relative-ranks/",
        "title": "Relative Ranks",
        "difficulty": "Easy"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "703",
        "lcLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
        "title": "Kth Largest Element in a Stream",
        "difficulty": "Easy"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "973",
        "lcLink": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "title": "K Closest Points to Origin",
        "difficulty": "Medium"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "1046",
        "lcLink": "https://leetcode.com/problems/last-stone-weight/",
        "title": "Last Stone Weight",
        "difficulty": "Easy"
    },
    {
        "no": "38",
        "pattern": "Heap - Top K Elements (Selection/Frequency)",
        "lcNo": "2558",
        "lcLink": "https://leetcode.com/problems/take-gifts-from-the-richest-pile/",
        "title": "Take Gifts From the Richest Pile",
        "difficulty": "Medium"
    },
    {
        "no": "39",
        "pattern": "Heap - Two Heaps for Median Finding",
        "lcNo": "295",
        "lcLink": "https://leetcode.com/problems/find-median-from-data-stream/",
        "title": "Find Median from Data Stream",
        "difficulty": "Hard"
    },
    {
        "no": "39",
        "pattern": "Heap - Two Heaps for Median Finding",
        "lcNo": "1825",
        "lcLink": "https://leetcode.com/problems/finding-mk-average/",
        "title": "Finding MK Average",
        "difficulty": "Medium"
    },
    {
        "no": "40",
        "pattern": "Heap - K-way Merge",
        "lcNo": "23",
        "lcLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "title": "Merge k Sorted Lists",
        "difficulty": "Hard"
    },
    {
        "no": "40",
        "pattern": "Heap - K-way Merge",
        "lcNo": "373",
        "lcLink": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
        "title": "Find K Pairs with Smallest Sums",
        "difficulty": "Medium"
    },
    {
        "no": "40",
        "pattern": "Heap - K-way Merge",
        "lcNo": "378",
        "lcLink": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
        "title": "Kth Smallest Element in a Sorted Matrix",
        "difficulty": "Medium"
    },
    {
        "no": "40",
        "pattern": "Heap - K-way Merge",
        "lcNo": "632",
        "lcLink": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        "title": "Smallest Range Covering Elements from K Lists",
        "difficulty": "Hard"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "253",
        "lcLink": "https://leetcode.com/problems/meeting-rooms-ii/",
        "title": "Meeting Rooms II",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "767",
        "lcLink": "https://leetcode.com/problems/reorganize-string/",
        "title": "Reorganize String",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "857",
        "lcLink": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
        "title": "Minimum Cost to Hire K Workers",
        "difficulty": "Hard"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "1642",
        "lcLink": "https://leetcode.com/problems/furthest-building-you-can-reach/",
        "title": "Furthest Building You Can Reach",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "1792",
        "lcLink": "https://leetcode.com/problems/maximum-average-pass-ratio/",
        "title": "Maximum Average Pass Ratio",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "1834",
        "lcLink": "https://leetcode.com/problems/single-threaded-cpu/",
        "title": "Single-Threaded CPU",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "1942",
        "lcLink": "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/",
        "title": "The Number of the Smallest Unoccupied Chair",
        "difficulty": "Medium"
    },
    {
        "no": "41",
        "pattern": "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "lcNo": "2402",
        "lcLink": "https://leetcode.com/problems/meeting-rooms-iii/",
        "title": "Meeting Rooms III",
        "difficulty": "Medium"
    },
    {
        "no": "42",
        "pattern": "Backtracking - Subsets (Include/Exclude)",
        "lcNo": "17",
        "lcLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "title": "Letter Combinations of a Phone Number",
        "difficulty": "Medium"
    },
    {
        "no": "42",
        "pattern": "Backtracking - Subsets (Include/Exclude)",
        "lcNo": "77",
        "lcLink": "https://leetcode.com/problems/combinations/",
        "title": "Combinations",
        "difficulty": "Medium"
    },
    {
        "no": "42",
        "pattern": "Backtracking - Subsets (Include/Exclude)",
        "lcNo": "78",
        "lcLink": "https://leetcode.com/problems/subsets/",
        "title": "Subsets",
        "difficulty": "Medium"
    },
    {
        "no": "42",
        "pattern": "Backtracking - Subsets (Include/Exclude)",
        "lcNo": "90",
        "lcLink": "https://leetcode.com/problems/subsets-ii/",
        "title": "Subsets II",
        "difficulty": "Medium"
    },
    {
        "no": "43",
        "pattern": "Backtracking - Permutations",
        "lcNo": "31",
        "lcLink": "https://leetcode.com/problems/next-permutation/",
        "title": "Next Permutation",
        "difficulty": "Medium"
    },
    {
        "no": "43",
        "pattern": "Backtracking - Permutations",
        "lcNo": "46",
        "lcLink": "https://leetcode.com/problems/permutations/",
        "title": "Permutations",
        "difficulty": "Medium"
    },
    {
        "no": "43",
        "pattern": "Backtracking - Permutations",
        "lcNo": "60",
        "lcLink": "https://leetcode.com/problems/permutation-sequence/",
        "title": "Permutation Sequence",
        "difficulty": "Medium"
    },
    {
        "no": "44",
        "pattern": "Backtracking - Combination Sum",
        "lcNo": "39",
        "lcLink": "https://leetcode.com/problems/combination-sum/",
        "title": "Combination Sum",
        "difficulty": "Medium"
    },
    {
        "no": "44",
        "pattern": "Backtracking - Combination Sum",
        "lcNo": "40",
        "lcLink": "https://leetcode.com/problems/combination-sum-ii/",
        "title": "Combination Sum II",
        "difficulty": "Medium"
    },
    {
        "no": "45",
        "pattern": "Backtracking - Parentheses Generation",
        "lcNo": "22",
        "lcLink": "https://leetcode.com/problems/generate-parentheses/",
        "title": "Generate Parentheses",
        "difficulty": "Medium"
    },
    {
        "no": "45",
        "pattern": "Backtracking - Parentheses Generation",
        "lcNo": "301",
        "lcLink": "https://leetcode.com/problems/remove-invalid-parentheses/",
        "title": "Remove Invalid Parentheses",
        "difficulty": "Hard"
    },
    {
        "no": "46",
        "pattern": "Backtracking - Word Search / Path Finding in Grid",
        "lcNo": "79",
        "lcLink": "https://leetcode.com/problems/word-search/",
        "title": "Word Search",
        "difficulty": "Medium"
    },
    {
        "no": "46",
        "pattern": "Backtracking - Word Search / Path Finding in Grid",
        "lcNo": "212",
        "lcLink": "https://leetcode.com/problems/word-search-ii/",
        "title": "Word Search II",
        "difficulty": "Hard"
    },
    {
        "no": "46",
        "pattern": "Backtracking - Word Search / Path Finding in Grid",
        "lcNo": "2018",
        "lcLink": "https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/",
        "title": "Check if Word Can Be Placed in Crossword",
        "difficulty": "Medium"
    },
    {
        "no": "47",
        "pattern": "Backtracking - N‑Queens / Constraint Satisfaction",
        "lcNo": "37",
        "lcLink": "https://leetcode.com/problems/sudoku-solver/",
        "title": "Sudoku Solver",
        "difficulty": "Hard"
    },
    {
        "no": "47",
        "pattern": "Backtracking - N‑Queens / Constraint Satisfaction",
        "lcNo": "51",
        "lcLink": "https://leetcode.com/problems/n-queens/",
        "title": "N‑Queens",
        "difficulty": "Hard"
    },
    {
        "no": "48",
        "pattern": "Backtracking - Palindrome Partitioning",
        "lcNo": "131",
        "lcLink": "https://leetcode.com/problems/palindrome-partitioning/",
        "title": "Palindrome Partitioning",
        "difficulty": "Medium"
    },
    {
        "no": "49",
        "pattern": "Greedy - Interval Merging/Scheduling",
        "lcNo": "56",
        "lcLink": "https://leetcode.com/problems/merge-intervals/",
        "title": "Merge Intervals",
        "difficulty": "Medium"
    },
    {
        "no": "49",
        "pattern": "Greedy - Interval Merging/Scheduling",
        "lcNo": "57",
        "lcLink": "https://leetcode.com/problems/insert-interval/",
        "title": "Insert Interval",
        "difficulty": "Hard"
    },
    {
        "no": "49",
        "pattern": "Greedy - Interval Merging/Scheduling",
        "lcNo": "759",
        "lcLink": "https://leetcode.com/problems/employee-free-time/",
        "title": "Employee Free Time",
        "difficulty": "Hard"
    },
    {
        "no": "49",
        "pattern": "Greedy - Interval Merging/Scheduling",
        "lcNo": "986",
        "lcLink": "https://leetcode.com/problems/interval-list-intersections/",
        "title": "Interval List Intersections",
        "difficulty": "Medium"
    },
    {
        "no": "49",
        "pattern": "Greedy - Interval Merging/Scheduling",
        "lcNo": "2406",
        "lcLink": "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/",
        "title": "Divide Intervals Into Minimum Number of Groups",
        "difficulty": "Hard"
    },
    {
        "no": "51",
        "pattern": "Greedy - Jump Game Reachability/Minimization",
        "lcNo": "45",
        "lcLink": "https://leetcode.com/problems/jump-game-ii/",
        "title": "Jump Game II",
        "difficulty": "Medium"
    },
    {
        "no": "51",
        "pattern": "Greedy - Jump Game Reachability/Minimization",
        "lcNo": "55",
        "lcLink": "https://leetcode.com/problems/jump-game/",
        "title": "Jump Game",
        "difficulty": "Medium"
    },
    {
        "no": "52",
        "pattern": "Greedy - Buy/Sell Stock",
        "lcNo": "121",
        "lcLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy"
    },
    {
        "no": "52",
        "pattern": "Greedy - Buy/Sell Stock",
        "lcNo": "122",
        "lcLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
        "title": "Best Time to Buy and Sell Stock II",
        "difficulty": "Medium"
    },
    {
        "no": "53",
        "pattern": "Greedy - Gas Station Circuit",
        "lcNo": "134",
        "lcLink": "https://leetcode.com/problems/gas-station/",
        "title": "Gas Station",
        "difficulty": "Medium"
    },
    {
        "no": "54",
        "pattern": "Greedy - Task Scheduling (Frequency Based)",
        "lcNo": "621",
        "lcLink": "https://leetcode.com/problems/task-scheduler/",
        "title": "Task Scheduler",
        "difficulty": "Medium"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "35",
        "lcLink": "https://leetcode.com/problems/search-insert-position/",
        "title": "Search Insert Position",
        "difficulty": "Easy"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "69",
        "lcLink": "https://leetcode.com/problems/sqrtx/",
        "title": "Sqrt(x)",
        "difficulty": "Easy"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "74",
        "lcLink": "https://leetcode.com/problems/search-a-2d-matrix/",
        "title": "Search a 2D Matrix",
        "difficulty": "Medium"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "278",
        "lcLink": "https://leetcode.com/problems/first-bad-version/",
        "title": "First Bad Version",
        "difficulty": "Easy"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "374",
        "lcLink": "https://leetcode.com/problems/guess-number-higher-or-lower/",
        "title": "Guess Number Higher or Lower",
        "difficulty": "Easy"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "540",
        "lcLink": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
        "title": "Single Element in a Sorted Array",
        "difficulty": "Medium"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "704",
        "lcLink": "https://leetcode.com/problems/binary-search/",
        "title": "Binary Search",
        "difficulty": "Easy"
    },
    {
        "no": "55",
        "pattern": "Binary Search - On Sorted Array/List",
        "lcNo": "1539",
        "lcLink": "https://leetcode.com/problems/kth-missing-positive-number/",
        "title": "Kth Missing Positive Number",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "33",
        "lcLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "81",
        "lcLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        "title": "Search in Rotated Sorted Array II",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "153",
        "lcLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "title": "Find Minimum in Rotated Sorted Array",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "162",
        "lcLink": "https://leetcode.com/problems/find-peak-element/",
        "title": "Find Peak Element",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "852",
        "lcLink": "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
        "title": "Peak Index in a Mountain Array",
        "difficulty": "Medium"
    },
    {
        "no": "56",
        "pattern": "Binary Search - Find Min/Max in Rotated Sorted Array",
        "lcNo": "1095",
        "lcLink": "https://leetcode.com/problems/find-in-mountain-array/",
        "title": "Find in Mountain Array",
        "difficulty": "Hard"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "410",
        "lcLink": "https://leetcode.com/problems/split-array-largest-sum/",
        "title": "Split Array Largest Sum",
        "difficulty": "Hard"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "774",
        "lcLink": "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
        "title": "Minimize Max Distance to Gas Station",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "875",
        "lcLink": "https://leetcode.com/problems/koko-eating-bananas/",
        "title": "Koko Eating Bananas",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "1011",
        "lcLink": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "title": "Capacity To Ship Packages Within D Days",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "1482",
        "lcLink": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
        "title": "Minimum Number of Days to Make m Bouquets",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "1760",
        "lcLink": "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/",
        "title": "Minimum Limit of Balls in a Bag",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "2064",
        "lcLink": "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/",
        "title": "Minimized Maximum of Products Distributed to Any Store",
        "difficulty": "Medium"
    },
    {
        "no": "57",
        "pattern": "Binary Search - On Answer / Condition Function",
        "lcNo": "2226",
        "lcLink": "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",
        "title": "Maximum Candies Allocated to K Children",
        "difficulty": "Hard"
    },
    {
        "no": "58",
        "pattern": "Binary Search - Find First/Last Occurrence",
        "lcNo": "34",
        "lcLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "title": "Find First and Last Position of Element in Sorted Array",
        "difficulty": "Medium"
    },
    {
        "no": "58",
        "pattern": "Binary Search - Find First/Last Occurrence",
        "lcNo": "658",
        "lcLink": "https://leetcode.com/problems/find-k-closest-elements/",
        "title": "Find K Closest Elements",
        "difficulty": "Medium"
    },
    {
        "no": "59",
        "pattern": "Binary Search - Median of Two Sorted Arrays",
        "lcNo": "4",
        "lcLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "title": "Median of Two Sorted Arrays",
        "difficulty": "Hard"
    },
    {
        "no": "60",
        "pattern": "Stack - Valid Parentheses Matching",
        "lcNo": "20",
        "lcLink": "https://leetcode.com/problems/valid-parentheses/",
        "title": "Valid Parentheses",
        "difficulty": "Easy"
    },
    {
        "no": "60",
        "pattern": "Stack - Valid Parentheses Matching",
        "lcNo": "32",
        "lcLink": "https://leetcode.com/problems/longest-valid-parentheses/",
        "title": "Longest Valid Parentheses",
        "difficulty": "Hard"
    },
    {
        "no": "60",
        "pattern": "Stack - Valid Parentheses Matching",
        "lcNo": "921",
        "lcLink": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
        "title": "Minimum Add to Make Parentheses Valid",
        "difficulty": "Medium"
    },
    {
        "no": "60",
        "pattern": "Stack - Valid Parentheses Matching",
        "lcNo": "1249",
        "lcLink": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
        "title": "Minimum Remove to Make Valid Parentheses",
        "difficulty": "Medium"
    },
    {
        "no": "60",
        "pattern": "Stack - Valid Parentheses Matching",
        "lcNo": "1963",
        "lcLink": "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/",
        "title": "Minimum Number of Swaps to Make the String Balanced",
        "difficulty": "Medium"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "402",
        "lcLink": "https://leetcode.com/problems/remove-k-digits/",
        "title": "Remove K Digits",
        "difficulty": "Hard"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "496",
        "lcLink": "https://leetcode.com/problems/next-greater-element-i/",
        "title": "Next Greater Element I",
        "difficulty": "Easy"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "503",
        "lcLink": "https://leetcode.com/problems/next-greater-element-ii/",
        "title": "Next Greater Element II",
        "difficulty": "Medium"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "739",
        "lcLink": "https://leetcode.com/problems/daily-temperatures/",
        "title": "Daily Temperatures",
        "difficulty": "Medium"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "901",
        "lcLink": "https://leetcode.com/problems/online-stock-span/",
        "title": "Online Stock Span",
        "difficulty": "Medium"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "907",
        "lcLink": "https://leetcode.com/problems/sum-of-subarray-minimums/",
        "title": "Sum of Subarray Minimums",
        "difficulty": "Hard"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "962",
        "lcLink": "https://leetcode.com/problems/maximum-width-ramp/",
        "title": "Maximum Width Ramp",
        "difficulty": "Medium"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "1475",
        "lcLink": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
        "title": "Final Prices With a Special Discount in a Shop",
        "difficulty": "Easy"
    },
    {
        "no": "61",
        "pattern": "Stack - Monotonic Stack",
        "lcNo": "1673",
        "lcLink": "https://leetcode.com/problems/find-the-most-competitive-subsequence/",
        "title": "Find the Most Competitive Subsequence",
        "difficulty": "Hard"
    },
    {
        "no": "62",
        "pattern": "Stack - Expression Evaluation (RPN/Infix)",
        "lcNo": "150",
        "lcLink": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "title": "Evaluate Reverse Polish Notation",
        "difficulty": "Medium"
    },
    {
        "no": "62",
        "pattern": "Stack - Expression Evaluation (RPN/Infix)",
        "lcNo": "224",
        "lcLink": "https://leetcode.com/problems/basic-calculator/",
        "title": "Basic Calculator",
        "difficulty": "Hard"
    },
    {
        "no": "62",
        "pattern": "Stack - Expression Evaluation (RPN/Infix)",
        "lcNo": "227",
        "lcLink": "https://leetcode.com/problems/basic-calculator-ii/",
        "title": "Basic Calculator II",
        "difficulty": "Medium"
    },
    {
        "no": "62",
        "pattern": "Stack - Expression Evaluation (RPN/Infix)",
        "lcNo": "772",
        "lcLink": "https://leetcode.com/problems/basic-calculator-iii/",
        "title": "Basic Calculator III",
        "difficulty": "Hard"
    },
    {
        "no": "63",
        "pattern": "Stack - Simulation / Backtracking Helper",
        "lcNo": "71",
        "lcLink": "https://leetcode.com/problems/simplify-path/",
        "title": "Simplify Path",
        "difficulty": "Medium"
    },
    {
        "no": "63",
        "pattern": "Stack - Simulation / Backtracking Helper",
        "lcNo": "394",
        "lcLink": "https://leetcode.com/problems/decode-string/",
        "title": "Decode String",
        "difficulty": "Medium"
    },
    {
        "no": "63",
        "pattern": "Stack - Simulation / Backtracking Helper",
        "lcNo": "735",
        "lcLink": "https://leetcode.com/problems/asteroid-collision/",
        "title": "Asteroid Collision",
        "difficulty": "Medium"
    },
    {
        "no": "64",
        "pattern": "Stack - Min Stack Design",
        "lcNo": "155",
        "lcLink": "https://leetcode.com/problems/min-stack/",
        "title": "Min Stack",
        "difficulty": "Easy"
    },
    {
        "no": "65",
        "pattern": "Stack - Largest Rectangle in Histogram",
        "lcNo": "84",
        "lcLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Hard"
    },
    {
        "no": "65",
        "pattern": "Stack - Largest Rectangle in Histogram",
        "lcNo": "85",
        "lcLink": "https://leetcode.com/problems/maximal-rectangle/",
        "title": "Maximal Rectangle",
        "difficulty": "Hard"
    },
    {
        "no": "66",
        "pattern": "Bitwise XOR - Finding Single/Missing Number",
        "lcNo": "136",
        "lcLink": "https://leetcode.com/problems/single-number/",
        "title": "Single Number",
        "difficulty": "Easy"
    },
    {
        "no": "66",
        "pattern": "Bitwise XOR - Finding Single/Missing Number",
        "lcNo": "137",
        "lcLink": "https://leetcode.com/problems/single-number-ii/",
        "title": "Single Number II",
        "difficulty": "Medium"
    },
    {
        "no": "66",
        "pattern": "Bitwise XOR - Finding Single/Missing Number",
        "lcNo": "268",
        "lcLink": "https://leetcode.com/problems/missing-number/",
        "title": "Missing Number",
        "difficulty": "Easy"
    },
    {
        "no": "66",
        "pattern": "Bitwise XOR - Finding Single/Missing Number",
        "lcNo": "389",
        "lcLink": "https://leetcode.com/problems/find-the-difference/",
        "title": "Find the Difference",
        "difficulty": "Easy"
    },
    {
        "no": "67",
        "pattern": "Bitwise AND - Counting Set Bits (Hamming Weight)",
        "lcNo": "191",
        "lcLink": "https://leetcode.com/problems/number-of-1-bits/",
        "title": "Number of 1 Bits",
        "difficulty": "Easy"
    },
    {
        "no": "69",
        "pattern": "Bitwise Operations - Power of Two/Four Check",
        "lcNo": "231",
        "lcLink": "https://leetcode.com/problems/power-of-two/",
        "title": "Power of Two",
        "difficulty": "Easy"
    },
    {
        "no": "69",
        "pattern": "Bitwise Operations - Power of Two/Four Check",
        "lcNo": "342",
        "lcLink": "https://leetcode.com/problems/power-of-four/",
        "title": "Power of Four",
        "difficulty": "Easy"
    },
    {
        "no": "70",
        "pattern": "Bitwise DP - Counting Bits Optimization",
        "lcNo": "338",
        "lcLink": "https://leetcode.com/problems/counting-bits/",
        "title": "Counting Bits",
        "difficulty": "Easy"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "83",
        "lcLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "title": "Remove Duplicates from Sorted List",
        "difficulty": "Easy"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "92",
        "lcLink": "https://leetcode.com/problems/reverse-linked-list-ii/",
        "title": "Reverse Linked List II",
        "difficulty": "Medium"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "206",
        "lcLink": "https://leetcode.com/problems/reverse-linked-list/",
        "title": "Reverse Linked List",
        "difficulty": "Easy"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "25",
        "lcLink": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "title": "Reverse Nodes in k-Group",
        "difficulty": "Hard"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "234",
        "lcLink": "https://leetcode.com/problems/palindrome-linked-list/",
        "title": "Palindrome Linked List",
        "difficulty": "Easy"
    },
    {
        "no": "71",
        "pattern": "Linked List - In-place Reversal",
        "lcNo": "82",
        "lcLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        "title": "Remove Duplicates from Sorted List II",
        "difficulty": "Medium"
    },
    {
        "no": "72",
        "pattern": "Linked List - Merging Two Sorted Lists",
        "lcNo": "21",
        "lcLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "title": "Merge Two Sorted Lists",
        "difficulty": "Easy"
    },
    {
        "no": "73",
        "pattern": "Linked List - Addition of Numbers",
        "lcNo": "2",
        "lcLink": "https://leetcode.com/problems/add-two-numbers/",
        "title": "Add Two Numbers",
        "difficulty": "Medium"
    },
    {
        "no": "73",
        "pattern": "Linked List - Addition of Numbers",
        "lcNo": "369",
        "lcLink": "https://leetcode.com/problems/plus-one-linked-list/",
        "title": "Plus One Linked List",
        "difficulty": "Medium"
    },
    {
        "no": "74",
        "pattern": "Linked List - Intersection Detection",
        "lcNo": "160",
        "lcLink": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "title": "Intersection of Two Linked Lists",
        "difficulty": "Easy"
    },
    {
        "no": "75",
        "pattern": "Linked List - Reordering / Partitioning",
        "lcNo": "24",
        "lcLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "title": "Swap Nodes in Pairs",
        "difficulty": "Medium"
    },
    {
        "no": "75",
        "pattern": "Linked List - Reordering / Partitioning",
        "lcNo": "61",
        "lcLink": "https://leetcode.com/problems/rotate-list/",
        "title": "Rotate List",
        "difficulty": "Medium"
    },
    {
        "no": "75",
        "pattern": "Linked List - Reordering / Partitioning",
        "lcNo": "86",
        "lcLink": "https://leetcode.com/problems/partition-list/",
        "title": "Partition List",
        "difficulty": "Medium"
    },
    {
        "no": "75",
        "pattern": "Linked List - Reordering / Partitioning",
        "lcNo": "143",
        "lcLink": "https://leetcode.com/problems/reorder-list/",
        "title": "Reorder List",
        "difficulty": "Medium"
    },
    {
        "no": "75",
        "pattern": "Linked List - Reordering / Partitioning",
        "lcNo": "328",
        "lcLink": "https://leetcode.com/problems/odd-even-linked-list/",
        "title": "Odd Even Linked List",
        "difficulty": "Medium"
    },
    {
        "no": "76",
        "pattern": "Array/Matrix - In-place Rotation",
        "lcNo": "48",
        "lcLink": "https://leetcode.com/problems/rotate-image/",
        "title": "Rotate Image",
        "difficulty": "Medium"
    },
    {
        "no": "76",
        "pattern": "Array/Matrix - In-place Rotation",
        "lcNo": "189",
        "lcLink": "https://leetcode.com/problems/rotate-array/",
        "title": "Rotate Array",
        "difficulty": "Easy"
    },
    {
        "no": "77",
        "pattern": "Array/Matrix - Spiral Traversal",
        "lcNo": "54",
        "lcLink": "https://leetcode.com/problems/spiral-matrix/",
        "title": "Spiral Matrix",
        "difficulty": "Medium"
    },
    {
        "no": "77",
        "pattern": "Array/Matrix - Spiral Traversal",
        "lcNo": "885",
        "lcLink": "https://leetcode.com/problems/spiral-matrix-iii/",
        "title": "Spiral Matrix III",
        "difficulty": "Medium"
    },
    {
        "no": "77",
        "pattern": "Array/Matrix - Spiral Traversal",
        "lcNo": "2326",
        "lcLink": "https://leetcode.com/problems/spiral-matrix-iv/",
        "title": "Spiral Matrix IV",
        "difficulty": "Medium"
    },
    {
        "no": "78",
        "pattern": "Array/Matrix - Set Matrix Zeroes (In-place Marking)",
        "lcNo": "73",
        "lcLink": "https://leetcode.com/problems/set-matrix-zeroes/",
        "title": "Set Matrix Zeroes",
        "difficulty": "Medium"
    },
    {
        "no": "79",
        "pattern": "Array - Product Except Self (Prefix/Suffix Products)",
        "lcNo": "238",
        "lcLink": "https://leetcode.com/problems/product-of-array-except-self/",
        "title": "Product of Array Except Self",
        "difficulty": "Medium"
    },
    {
        "no": "80",
        "pattern": "Array - Plus One (Handling Carry)",
        "lcNo": "66",
        "lcLink": "https://leetcode.com/problems/plus-one/",
        "title": "Plus One",
        "difficulty": "Easy"
    },
    {
        "no": "81",
        "pattern": "Array - Merge Sorted Array (In-place from End)",
        "lcNo": "88",
        "lcLink": "https://leetcode.com/problems/merge-sorted-array/",
        "title": "Merge Sorted Array",
        "difficulty": "Easy"
    },
    {
        "no": "82",
        "pattern": "Array - Cyclic Sort",
        "lcNo": "41",
        "lcLink": "https://leetcode.com/problems/first-missing-positive/",
        "title": "First Missing Positive",
        "difficulty": "Hard"
    },
    {
        "no": "82",
        "pattern": "Array - Cyclic Sort",
        "lcNo": "268",
        "lcLink": "https://leetcode.com/problems/missing-number/",
        "title": "Missing Number",
        "difficulty": "Easy"
    },
    {
        "no": "82",
        "pattern": "Array - Cyclic Sort",
        "lcNo": "287",
        "lcLink": "https://leetcode.com/problems/find-the-duplicate-number/",
        "title": "Find the Duplicate Number",
        "difficulty": "Medium"
    },
    {
        "no": "82",
        "pattern": "Array - Cyclic Sort",
        "lcNo": "442",
        "lcLink": "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
        "title": "Find All Duplicates in an Array",
        "difficulty": "Medium"
    },
    {
        "no": "82",
        "pattern": "Array - Cyclic Sort",
        "lcNo": "448",
        "lcLink": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        "title": "Find All Numbers Disappeared in an Array",
        "difficulty": "Easy"
    },
    {
        "no": "83",
        "pattern": "Array - Kadane's Variant for Maximum Product",
        "lcNo": "152",
        "lcLink": "https://leetcode.com/problems/maximum-product-subarray/",
        "title": "Maximum Product Subarray",
        "difficulty": "Medium"
    },
    {
        "no": "84",
        "pattern": "String - Palindrome Check (Two Pointers / Reverse)",
        "lcNo": "9",
        "lcLink": "https://leetcode.com/problems/palindrome-number/",
        "title": "Palindrome Number",
        "difficulty": "Easy"
    },
    {
        "no": "84",
        "pattern": "String - Palindrome Check (Two Pointers / Reverse)",
        "lcNo": "125",
        "lcLink": "https://leetcode.com/problems/valid-palindrome/",
        "title": "Valid Palindrome",
        "difficulty": "Easy"
    },
    {
        "no": "84",
        "pattern": "String - Palindrome Check (Two Pointers / Reverse)",
        "lcNo": "680",
        "lcLink": "https://leetcode.com/problems/valid-palindrome-ii/",
        "title": "Valid Palindrome II",
        "difficulty": "Easy"
    },
    {
        "no": "85",
        "pattern": "String - Anagram Check (Frequency Count/Sort)",
        "lcNo": "49",
        "lcLink": "https://leetcode.com/problems/group-anagrams/",
        "title": "Group Anagrams",
        "difficulty": "Medium"
    },
    {
        "no": "85",
        "pattern": "String - Anagram Check (Frequency Count/Sort)",
        "lcNo": "242",
        "lcLink": "https://leetcode.com/problems/valid-anagram/",
        "title": "Valid Anagram",
        "difficulty": "Easy"
    },
    {
        "no": "86",
        "pattern": "String - Roman to Integer Conversion",
        "lcNo": "13",
        "lcLink": "https://leetcode.com/problems/roman-to-integer/",
        "title": "Roman to Integer",
        "difficulty": "Easy"
    },
    {
        "no": "87",
        "pattern": "String - String to Integer (atoi)",
        "lcNo": "8",
        "lcLink": "https://leetcode.com/problems/string-to-integer-atoi/",
        "title": "String to Integer (atoi)",
        "difficulty": "Medium"
    },
    {
        "no": "88",
        "pattern": "String - Multiply Strings (Manual Simulation)",
        "lcNo": "43",
        "lcLink": "https://leetcode.com/problems/multiply-strings/",
        "title": "Multiply Strings",
        "difficulty": "Medium"
    },
    {
        "no": "89",
        "pattern": "String Matching - Naive / KMP / Rabin‑Karp",
        "lcNo": "28",
        "lcLink": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "title": "Find the Index of the First Occurrence in a String",
        "difficulty": "Easy"
    },
    {
        "no": "89",
        "pattern": "String Matching - Naive / KMP / Rabin‑Karp",
        "lcNo": "214",
        "lcLink": "https://leetcode.com/problems/shortest-palindrome/",
        "title": "Shortest Palindrome",
        "difficulty": "Hard"
    },
    {
        "no": "89",
        "pattern": "String Matching - Naive / KMP / Rabin‑Karp",
        "lcNo": "686",
        "lcLink": "https://leetcode.com/problems/repeated-string-match/",
        "title": "Repeated String Match",
        "difficulty": "Medium"
    },
    {
        "no": "89",
        "pattern": "String Matching - Naive / KMP / Rabin‑Karp",
        "lcNo": "796",
        "lcLink": "https://leetcode.com/problems/rotate-string/",
        "title": "Rotate String",
        "difficulty": "Easy"
    },
    {
        "no": "89",
        "pattern": "String Matching - Naive / KMP / Rabin‑Karp",
        "lcNo": "3008",
        "lcLink": "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/",
        "title": "Find Beautiful Indices in the Given Array II",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "146",
        "lcLink": "https://leetcode.com/problems/lru-cache/",
        "title": "LRU Cache",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "155",
        "lcLink": "https://leetcode.com/problems/min-stack/",
        "title": "Min Stack",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "208",
        "lcLink": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "title": "Implement Trie (Prefix Tree)",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "211",
        "lcLink": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "title": "Design Add and Search Words Data Structure",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "225",
        "lcLink": "https://leetcode.com/problems/implement-stack-using-queues/",
        "title": "Implement Stack using Queues",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "232",
        "lcLink": "https://leetcode.com/problems/implement-queue-using-stacks/",
        "title": "Implement Queue using Stacks",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "251",
        "lcLink": "https://leetcode.com/problems/flatten-2d-vector/",
        "title": "Flatten 2D Vector",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "271",
        "lcLink": "https://leetcode.com/problems/encode-and-decode-strings/",
        "title": "Encode and Decode Strings",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "295",
        "lcLink": "https://leetcode.com/problems/find-median-from-data-stream/",
        "title": "Find Median from Data Stream",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "341",
        "lcLink": "https://leetcode.com/problems/flatten-nested-list-iterator/",
        "title": "Flatten Nested List Iterator",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "346",
        "lcLink": "https://leetcode.com/problems/moving-average-from-data-stream/",
        "title": "Moving Average from Data Stream",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "353",
        "lcLink": "https://leetcode.com/problems/design-snake-game/",
        "title": "Design Snake Game",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "359",
        "lcLink": "https://leetcode.com/problems/logger-rate-limiter/",
        "title": "Logger Rate Limiter",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "362",
        "lcLink": "https://leetcode.com/problems/design-hit-counter/",
        "title": "Design Hit Counter",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "379",
        "lcLink": "https://leetcode.com/problems/design-phone-directory/",
        "title": "Design Phone Directory",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "380",
        "lcLink": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        "title": "Insert Delete GetRandom O(1)",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "432",
        "lcLink": "https://leetcode.com/problems/all-oone-data-structure/",
        "title": "All O\\`one Data Structure",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "460",
        "lcLink": "https://leetcode.com/problems/lfu-cache/",
        "title": "LFU Cache",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "604",
        "lcLink": "https://leetcode.com/problems/design-compressed-string-iterator/",
        "title": "Design Compressed String Iterator",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "622",
        "lcLink": "https://leetcode.com/problems/design-circular-queue/",
        "title": "Design Circular Queue",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "641",
        "lcLink": "https://leetcode.com/problems/design-circular-deque/",
        "title": "Design Circular Deque",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "642",
        "lcLink": "https://leetcode.com/problems/design-search-autocomplete-system/",
        "title": "Design Search Autocomplete System",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "706",
        "lcLink": "https://leetcode.com/problems/design-hashmap/",
        "title": "Design HashMap",
        "difficulty": "Easy"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "715",
        "lcLink": "https://leetcode.com/problems/range-module/",
        "title": "Range Module",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "900",
        "lcLink": "https://leetcode.com/problems/rle-iterator/",
        "title": "RLE Iterator",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "981",
        "lcLink": "https://leetcode.com/problems/tweet-counts-per-frequency/",
        "title": "Tweet Counts Per Frequency",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "1146",
        "lcLink": "https://leetcode.com/problems/snapshot-array/",
        "title": "Snapshot Array",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "1348",
        "lcLink": "https://leetcode.com/problems/tweet-counts-per-frequency/",
        "title": "Tweet Counts Per Frequency",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "1352",
        "lcLink": "https://leetcode.com/problems/product-of-the-last-k-numbers/",
        "title": "Product of the Last K Numbers",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "1381",
        "lcLink": "https://leetcode.com/problems/design-a-stack-with-increment-operation/",
        "title": "Design a Stack With Increment Operation",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "1756",
        "lcLink": "https://leetcode.com/problems/design-most-recently-used-queue/",
        "title": "Design Most Recently Used Queue",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "2013",
        "lcLink": "https://leetcode.com/problems/detect-squares/",
        "title": "Detect Squares",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "2034",
        "lcLink": "https://leetcode.com/problems/stock-price-fluctuation/",
        "title": "Stock Price Fluctuation",
        "difficulty": "Medium"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "2296",
        "lcLink": "https://leetcode.com/problems/design-a-text-editor/",
        "title": "Design a Text Editor",
        "difficulty": "Hard"
    },
    {
        "no": "91",
        "pattern": "Design (General/Specific)",
        "lcNo": "2336",
        "lcLink": "https://leetcode.com/problems/smallest-number-in-infinite-set/",
        "title": "Smallest Number in Infinite Set",
        "difficulty": "Medium"
    }
];

export const conceptTopics = [
    {
        "title": "Array and Strings",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/README.md"
            },
            {
                "title": "Sorting",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/1%29%20Sorting/Readme.md"
            },
            {
                "title": "Searching",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/2%29%20Searching/Readme.md"
            },
            {
                "title": "Two Pointers",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/3%29%20Two%20Pointers/Readme.md"
            },
            {
                "title": "Sliding Window",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/4%29%20Sliding%20Window/Readme.md"
            },
            {
                "title": "Matrices",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/5%29%20Matrices/Readme.md"
            },
            {
                "title": "HashMaps",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/1%29%20Array%20and%20Strings%20%E2%98%86/6%29%20HashMaps/Readme.md"
            }
        ]
    },
    {
        "title": "Linked Lists",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/2%29%20Linked%20Lists%20%E2%98%86/README.md"
            }
        ]
    },
    {
        "title": "HashMaps",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/3%29%20HashMaps%20%E2%98%86/README.md"
            }
        ]
    },
    {
        "title": "Trees",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/4%29%20Trees%20%E2%98%86/README.md"
            }
        ]
    },
    {
        "title": "Stack and Queues",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/5%29%20Stack%20and%20Queues/README.md"
            }
        ]
    },
    {
        "title": "Heaps (Priority Queues)",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/6%29%20Heaps%20%28Priority%20Queues%29/README.md"
            }
        ]
    },
    {
        "title": "Graphs",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/7%29%20Graphs/README.md"
            }
        ]
    },
    {
        "title": "Tries",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/8%29%20Tries/README.md"
            }
        ]
    },
    {
        "title": "Recursion",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/9%29%20Recursion/README.md"
            }
        ]
    },
    {
        "title": "Back Tracking",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/10%29%20Back%20Tracking/README.md"
            }
        ]
    },
    {
        "title": "Dynamic programming",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/11%29%20Dynamic%20programming%20%E2%98%86/README.md"
            }
        ]
    },
    {
        "title": "Greedy Algo",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/12%29%20Greedy%20Algo/README.md"
            }
        ]
    },
    {
        "title": "Disjoint set (Union-Find)",
        "subtopics": [
            {
                "title": "Core Concepts",
                "url": "https://raw.githubusercontent.com/AnkushSinghGandhi/DSA-OneShot/main/13%29%20Disjoint%20set%20%28Union-Find%29/README.md"
            }
        ]
    }
];
