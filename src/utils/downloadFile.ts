import { Api } from '@/services/api-client';

export const downloadPriceList = async (): Promise<void> => {
  try {
    const response = await Api.priceList.getPriceList();

    const blob = new Blob([response.data], { type: response.headers['content-type'] });

    const urlBlob = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = urlBlob;
    link.setAttribute('download', 'прейскурант.xlsx');

    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(urlBlob);
  } catch (error) {
    console.error('Error downloading the file:', error);
    throw error;
  }
};
