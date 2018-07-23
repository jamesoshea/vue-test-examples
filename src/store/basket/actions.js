const updateProjectId = (context, newProjectId) => {
  context.commit('UPDATE_PROJECT_ID', newProjectId);
};

const updateTotal = (context, newTotal) => {
  context.commit('UPDATE_TOTAL', newTotal);
};

export default {
  updateProjectId,
  updateTotal
};
