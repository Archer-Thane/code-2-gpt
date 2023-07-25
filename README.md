# 👨🏻‍💻 code-2-gpt 🧠: Transform Your Diverese Files to One to Send to ChatGPT

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)

> code-2-gpt is a handy utility designed to help you simplify the task of feeding structured, folder-based code into a GPT chat like ChatGPT. It concatenates all the files of a specified type within a directory into separate text files, allowing you to copy the unified text content effortlessly.

## 📖 About The Project

When asking question about codes to GPTs, handling structured, folder-based data can be tricky. If you need to feed code to your model and your code is divided across multiple files or directories, you'll find code-2-gpt to be a valuable tool.

Imagine you have a project structured in NestJS modules. You might have numerous `.ts` or `.js` files across several directories. Instead of manually combining these files or writing a complex script to do so, you can use code-2-gpt to automatically generate concatenated text files. It's all about making the preparation of training data as frictionless as possible!

## 📌 Prerequisites

- Node.js >=14.x.x

## 🎉 Installation

```bash
npm install code-2-gpt
```

## 🔨 Usage

```bash
code-2-gpt --ext=js --keep-old
```

This command will search through the current directory, concatenate all .js files into separate text files named like results-001.txt, results-002.txt, and so on. Each file will contain up to 27500 characters of content, due to limitation on version 4 of ChatGPT. You can then conveniently copy this unified text for GPT model feeding.

Existing results-\*.txt files will not be deleted due to the --keep-old flag. If you want to remove them before generating new ones, omit this flag.

## 🌈 Command-Line Options

```bash
--ext # Specify the extension of the files to be concatenated.
--keep-old # If present, prevents deletion of existing `results-*.txt` files.
```

## 📚 Use Cases

- Training GPT-like models with your own code data.
- Simplifying code review processes by unifying multi-file changes into single documents.
- Creating backups or snapshots of codebase at a given time.

## 👥 About The Author

👤 Ali Bahrami Ehsan

Github: @Archer-Thane

## 📝 License

This project is licensed under the MIT License.

## 🎈 Contributing

Contributions are always welcome! See CONTRIBUTING.md for ways to get started.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!
