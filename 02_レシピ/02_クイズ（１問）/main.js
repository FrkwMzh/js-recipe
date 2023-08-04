const choose = function (choiceStirng) {
  if (choiceStirng === "ゴリアテ") {
    feedback.textcontent =
      "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
  } else if (choiceStirng === "ゼニガメ") {
    feedback.textcontent =
      "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
  } else if (choiceStirng === "ガニメデ") {
    feedback.textcontent = "正解！ガニメデは、木星の第三惑星だよ！"
  }
}

choice1.onclick = function () {
  //ゴリアテを選択
  choose("ゴリアテ")
}
choice2.onclick = function () {
  //ゼニガメを選択
  choose("ゼニガメ")
}
choice3.onclick = function () {
  //ガニメデを選択
  choose("ガニメデ")
}
