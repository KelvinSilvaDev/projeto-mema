function faq(req, res) {
  const [id, question, answer] = items;

  res.json({
    faq: items,
  });
}
