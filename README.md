# 🚀 code-2-gpt 🎁

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)

> 💡 This package concatenates all the files of a certain type within a directory into separate text files. Each text file will not exceed a specified size limit. 📚

## 📌 Prerequisites

- Node.js >=14.x.x

## 🎉 Install

```bash
npm install code-2-gpt
```

🔨 Usage

code-2-gpt --ext=js --keep-old

This command will concatenate all .js files in the current directory into separate text files, named like results-001.txt, results-002.txt, etc. Each file will contain up to 27500 characters of content. There, you can copy the whole text of code to ChatGPT.

When You have separate connected data, which structured in a folder, this utility is useful. For example, in nest modules.

Existing results-\*.txt files will not be deleted due to the --keep-old flag. If you want to delete them before creating new ones, just remove this flag.

🌈 Options

Option Description
--ext Specify the extension of the files to be concatenated.
--keep-old If present, existing results-\*.txt files will not be deleted.

👥 Authors
👤 Ali Bahrami Ehsan

Github: @Archer-Thane

📝 License
This project is ISC licensed.

🌟 Show your support
Give a ⭐️ if this project helped you!
