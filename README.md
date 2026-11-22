# Генератор форм на Typescript

[![hexlet-check](https://github.com/nicky2pc/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nicky2pc/react-urfu-project-81/actions)
[![check](https://github.com/nicky2pc/react-urfu-project-81/actions/workflows/check.yml/badge.svg)](https://github.com/nicky2pc/react-urfu-project-81/actions/workflows/check.yml)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она заметно сокращает код описания формы за счет автоматической обработки ошибок и различных контролов.

Учебный проект Хекслета: https://ru.hexlet.io/
Как это должно работать: https://files.hexlet.app/a/100lcl

## Стек

- TypeScript

## Установка

```bash
git clone https://github.com/nicky2pc/react-urfu-project-81.git
cd react-urfu-project-81
make install
make build
```

## Проверки

```bash
make lint           # oxlint и oxfmt
make typecheck      # tsc без сборки
make test           # vitest
make test-coverage  # тесты с порогом покрытия
```

## Использование

```ts
import HexletCode from "@hexlet/code";

const template = { name: "rob", job: "hexlet", gender: "m" };

const form = HexletCode.formFor(template, { url: "/users" }, (f) => {
  f.input("name", { class: "user-input" });
  f.input("job", { as: "textarea", rows: 50 });
  f.submit();
});

console.log(form);
// <form action="/users" method="post"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><textarea cols="20" rows="50" name="job">hexlet</textarea><input type="submit" value="Save"></form>
```

- `url` становится атрибутом `action`, по умолчанию `#`. Метод по умолчанию `post`.
- `input` создаёт текстовое поле с подписью `label`. С опцией `as: "textarea"` получается `textarea` с размером `cols="20"` и `rows="40"`, если не задан другой. Остальные опции становятся атрибутами поля.
- `submit` добавляет кнопку отправки с текстом `Save`, другой текст передаётся первым аргументом: `f.submit("Wow")`.
- Если поля нет в шаблоне, `formFor` бросает ошибку `Field 'age' does not exist in the template.`

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
