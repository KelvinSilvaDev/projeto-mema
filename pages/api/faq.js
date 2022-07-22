function faq(req, res) {
  const [id, question, answer] = items;

  res.status(200).json({
    items: { id, question, answer },
  });
}
