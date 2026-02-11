# Как выложить сайт на GitHub Pages

Репозиторий уже инициализирован, первый коммит сделан. Осталось создать репозиторий на GitHub и включить Pages.

## Шаги

### 1. Создай репозиторий на GitHub

- Зайди на [github.com](https://github.com) и нажми **New repository**.
- Имя репозитория, например: **hedgehogs** (или любое другое).
- **Не** ставь галочки «Add README» / «Add .gitignore» — у тебя уже есть файлы.
- Нажми **Create repository**.

### 2. Привяжи свой проект и запушь

В терминале, в папке проекта выполни (подставь свой логин и имя репозитория):

```bash
cd /Users/rysuntsov/Documents/23_Code/hedgehogs

git remote add origin https://github.com/ТВОЙ_ЛОГИН/hedgehogs.git
git push -u origin main
```

Если репозиторий у тебя называется по-другому — замени `hedgehogs` в URL.

### 3. Включи GitHub Pages

- Открой свой репозиторий на GitHub.
- Перейди в **Settings** → в левом меню **Pages**.
- В блоке **Build and deployment**:
  - **Source**: Deploy from a branch
  - **Branch**: `main` (или `master`, если у тебя такая ветка)
  - **Folder**: `/ (root)`
- Нажми **Save**.

### 4. Где будет сайт

Через 1–2 минуты сайт появится по адресу:

**https://ТВОЙ_ЛОГИН.github.io/hedgehogs/**

(замени `ТВОЙ_ЛОГИН` и `hedgehogs` на свои логин и имя репозитория).

Если что-то не откроется — подожди ещё пару минут или обнови страницу.
