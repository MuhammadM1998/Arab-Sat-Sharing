import sampleData from '~/assets/sample-data.json';

export default function () {
  return {
    fetchData: async () => await useFetch('/playwright'),
    fetchSampleData: () => {
      return { data: sampleData, error: false };
    },
  };
}
