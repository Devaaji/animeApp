import create from 'zustand';

const useStoreAnime = create(
  set => {
    return {
      currentFavorit: [],
      updateCurrentFavorit: currentFavorit =>
        set(state => ({
          currentFavorit: [...state.currentFavorit, currentFavorit],
        })),
    };
  },
  {name: 'user'},
);

export default useStoreAnime;
