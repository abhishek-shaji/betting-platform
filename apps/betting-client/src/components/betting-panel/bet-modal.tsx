'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useBet } from '../../hooks/useBet';
import { Outcome } from '../../types';

export interface BetData {
  eventName: string;
  outcome: Outcome;
}

interface BetModalProps {
  data: BetData | null;
  onClose: () => void;
}

const BetModal = ({ data, onClose }: BetModalProps) => {
  const { loading, error, placeBet } = useBet();

  const validationSchema = Yup.object().shape({
    betAmount: Yup.number()
      .positive('Bet amount must be positive')
      .required('Bet amount is required')
      .min(1, 'Minimum bet amount is 1')
      .max(10000, 'Maximum bet amount is 10,000'),
  });

  const formik = useFormik({
    initialValues: {
      betAmount: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (data) {
        placeBet(data.outcome.id, Number(values.betAmount));
      }
    },
  });

  return (
    <Dialog
      open={!!data}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6">
                <h3 className="mb-4 text-lg font-semibold leading-6 text-gray-900">
                  Place Your Bet
                </h3>
                {data && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Event: {data.eventName}
                      </p>
                      <p className="text-sm text-gray-500">{data.outcome.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Odds: {data.outcome.odds}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="betAmount"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Bet Amount
                      </label>
                      <input
                        {...formik.getFieldProps('betAmount')}
                        id="betAmount"
                        type="number"
                        className={`focus:ring-primary focus:border-primary block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm ${
                          formik.touched.betAmount && formik.errors.betAmount
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Enter amount"
                      />
                      {formik.touched.betAmount && formik.errors.betAmount && (
                        <div className="mt-1 text-sm text-red-500">
                          {formik.errors.betAmount}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Potential Win: $
                        {(Number(formik.values.betAmount) * data.outcome.odds).toFixed(2)}
                      </p>
                    </div>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                  </div>
                )}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !formik.isValid || !formik.dirty}
                >
                  {loading ? 'Placing Bet...' : 'Place Bet'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export { BetModal };
