export default function(value) {
  if (!isNaN(value)) return true;
  const unit = value.replace(/[^a-zA-Z]+/g, '');
  const unitMap = [
    'em',
    'ex',
    '%',
    'px',
    'cm',
    'mm',
    'in',
    'pt',
    'pc',
    'ch',
    'rem',
    'vh',
    'vw',
    'vmin',
    'vmax'
  ];
  return unitMap.indexOf(unit) !== -1;
}
