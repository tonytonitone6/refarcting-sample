function alertForMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms();
      return 'Don';
    }

    if (p === 'John') {
      setOffAlarms();
      return 'John';
    }

    return ''
  }
}

function findMiscreant() {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms();
      return 'Don';
    }

    if (p === 'John') {
      setOffAlarms();
      return 'John';
    }

    return ''
  }
}