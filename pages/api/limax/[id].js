import limax from 'limax';

export default ({ query: { id } }, res) {
  const s = limax(id)
  res.status(200).json(s)
}
