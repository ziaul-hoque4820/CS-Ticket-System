# CS — Ticket System

---
## 🚀 Live Demo
🔗 [View Live Site](https://cs-ticket-system-teal.vercel.app/)

---
### 1. What is JSX, and why is it used?
- JSX হলো জাভাস্ক্রিপ্ট এর একটি  syntax extension যেটার মাধ্যমে আমরা জাভাস্ক্রিপ্ট এর মধ্যে HTML এর মতো কোড লিখতে পারি। এটা UI কোডকে পড়তে সহজ করে। ‍মূলত এই JSX পেছনে React.createElement() এ রুপান্তর করে।
.
---
### 2.  What is the difference between State and Props?
- Props হলো পেরেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টের মধ্যে পাঠানো ডাটা। চাইল্ড কম্পোনেন্ট এই ডাটা চেন্জ করতে পারেনা। আর State হলো কম্পোনেন্ট এর নিজের ডাটা, এইটা বদলালে কম্পোনেন্ট আবার রেন্ডার হয়।
.
---
### 3. What is the useState hook, and how does it work?
- useState হলো রিয়েক্ট এর একটি হুক যেটা ফাংশনাল কম্পোনেন্ট এর মধ্যে স্টেট যোগ করে। useState দুইটা জিনিস রিটান করে- কারেন্ট ভ্যালু ও একটা সেটার ফাংশন। যখন সেটার ফাংশনটা কল করা হয় রিয়েক্ট নতুন ভ্যালু ‍দিয়ে কম্পোনেন্টটি আবার রেন্ডার করে।
.
---
### 4. How can you share state between components in React?
- সবচেয়ে সাধারন উপায় হলো state কে উপরে তুলে আনা। যে দুইটা কম্পোনেন্ট এর ডাটা দরকার তাদের সবচেয়ে উপরের কাছের পেরেন্ট কম্পোনেন্ট এর মধ্যে state রেখে প্রপস হিসেবে পাঠানো। অনেক গভীরে পাঠাতে হলে Context API ব্যবহার করা হয়। বড় app এর জন্য Redux ব্যবহার করা হয়।
.
---
### 5. How is event handling done in React?
- React এ event handle করা হয় camelCase syntax দিয়ে যেমন onClick, onChange, onSubmit। এখানে স্ট্রিং না দিয়ে ফাংশন রেফারেন্স পাস করতে হয়। React Synthetic Events ব্যবহার করে যেটা সব browser এ একইভাবে কাজ করে।
.
---