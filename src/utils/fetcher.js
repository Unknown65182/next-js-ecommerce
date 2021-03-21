const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    console.log(`${error}, Status: ${error.status}`);
  }
};

export default fetcher;
