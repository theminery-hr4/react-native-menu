module.exports = () => {
  const { shape, func } = require('prop-types')

  const IMenuController = shape({
    open: func.isRequired,
    close: func.isRequired,
    toggle: func.isRequired,
    registerOptionsElement: func.isRequired
  });

  return { IMenuController };
};

