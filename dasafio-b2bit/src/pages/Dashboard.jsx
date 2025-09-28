useEffect(() => {
  async function carregar() {
    try {
      const dadosAPI = await fetchDashboardData();
      setDados(dadosAPI);
    } catch (e) {
      console.error(e);
    }
  }
  carregar();
}, []);
